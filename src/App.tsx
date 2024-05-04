import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/table/table';
import GroupList from './components/groupList';
import { getGames, getGamesIsLoading, loadGames } from './store/games';
import { useAppDispatch } from './store/hooks';
import { TableColumnInterface } from './components/table/types/TableColumnsInteface';
import Spinner from './components/spinner';
import { GamesInterface } from './api/types/GamesInterface';
import Pagination from './components/pagination';

function App() {
  const dispatch = useAppDispatch();
  const games = useSelector(getGames());
  const isLoading = useSelector(getGamesIsLoading());

  const [sortedGames, setSortedGames] = useState<GamesInterface[]>([]);
  const [filteredGames, setFilteredGames] = useState<GamesInterface[]>([]);
  const [sortBy, setSortBy] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [DEVIDER, setDEVIDER] = useState<number>(5);

  const columns: TableColumnInterface = {
    name: { name: 'Name', iter: 'name' },
    img: { name: 'Image' },
    os: { name: 'OS' },
    isOnline: { name: 'Online Game', iter: 'isOnline' },
    languages: { name: 'Languages' },
    rating: { name: 'Rating', iter: 'rating' },
  };

  useEffect(() => {
    dispatch(loadGames());
  }, [games]);

  const handleSort = (arg: any) => {
    const toSort: GamesInterface[] = filteredGames.length
      ? filteredGames
      : games;

    if (arg === sortBy) {
      setSortedGames([...sortedGames.reverse()]);
    } else {
      setSortedGames(
        [...toSort].sort((a: any, b: any) => {
          return typeof a[arg as keyof GamesInterface] === 'string'
            ? a[arg as keyof GamesInterface]?.localeCompare(
                b[arg as keyof GamesInterface],
              )
            : ((a[arg as keyof GamesInterface] -
                b[arg as keyof GamesInterface]) as any);
        }),
      );
    }
    setSortBy(arg);
  };

  const handlePagination = (pageNum: number): void => {
    setPage(pageNum + 1);
  };

  const changeDEVIDER = (add: boolean) => {
    setPage(1);
    if (add) {
      if (DEVIDER === games.length) return;
      setDEVIDER((prev) => ++prev);
    } else {
      if (DEVIDER === 1) return;
      setDEVIDER((prev) => --prev);
    }
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner />
      </div>
    );
  }

  const getData = (): GamesInterface[] => {
    if (sortedGames.length) {
      return sortedGames;
    }
    if (filteredGames.length) {
      return filteredGames;
    }
    return games;
  };

  const getLanguages = (): string[] => {
    const uniqueLanguages: Set<string> = new Set<string>();
    games.forEach((g) => g.languages.forEach((l) => uniqueLanguages.add(l)));
    return Array.from(uniqueLanguages);
  };

  const getOS = (): string[] => {
    const uniqueOS: Set<string> = new Set<string>();
    games.forEach((g) => g.os.forEach((os) => uniqueOS.add(os)));
    return Array.from(uniqueOS);
  };

  const handleFilter = (filterBy: string): void => {
    setPage(1);
    setSortedGames([]);
    setSortBy('');

    if (!filterBy) {
      setFilteredGames([]);
      return;
    }
    const keys = filterBy.split('/');
    if (keys.length === 1) {
      setFilteredGames(
        games.filter((g) => g[keys[0] as keyof GamesInterface] === true),
      );
    } else {
      setFilteredGames(
        games.filter((g) => {
          const gByKey: string[] = g[keys[0] as keyof GamesInterface] as [];
          return gByKey.filter((el) => el === keys[1]).length ? g : false;
        }),
      );
    }
  };

  return (
    <>
      <div className="d-flex m-3 gap-2">
        <GroupList
          languages={getLanguages()}
          os={getOS()}
          onFilter={handleFilter}
        />
        <div className="d-flex flex-column w-100">
          <Table
            data={getData().slice((page - 1) * DEVIDER, page * DEVIDER)}
            columns={columns}
            onClick={handleSort}
          />

          <Pagination
            page={page}
            onClick={handlePagination}
            amountOfPages={getData().length / DEVIDER}
          />
          <div className="d-flex gap-2">
            <button
              className="btn btn-primary"
              onClick={() => changeDEVIDER(true)}
            >
              Add devider
            </button>
            <button
              className="btn btn-primary"
              onClick={() => changeDEVIDER(false)}
            >
              Sub devider
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
