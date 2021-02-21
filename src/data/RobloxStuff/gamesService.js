import { httpService } from 'core-utilities';
import {
  getExpirationMS,
  storeSortData,
  getSortValueFromStorage,
  isSortTokenExpired
} from './gameSortSerivce';
import gamesApiConstant from '../constants/gamesApiConstants';

let timeoutGameSort = null;
const getGamesSorts = (gameSortsContext, isDataCacheEnabled) => {
  const currentGameSortContext = gameSortsContext || gamesApiConstant.gamesDefaultSortAlgorithm;
  const params = {
    gameSortsContext: currentGameSortContext
  };
  if (timeoutGameSort) {
    clearTimeout(timeoutGameSort);
  }

  return httpService.get(gamesApiConstant.getGameSortsWithDetaultSorts, params).then(({ data }) => {
    if (data?.sorts && isDataCacheEnabled) {
      storeSortData(data, currentGameSortContext);
      const expirationMS = getExpirationMS(data.sorts);
      timeoutGameSort = setTimeout(() => {
        getGamesSorts();
      }, expirationMS);
    }
    return data;
  });
};

const getGameSortBySortName = (sortName, gameSortUrl) => {
  return getGamesSorts(gameSortUrl, true).then(data => {
    let sortReturnValue = null;
    if (data?.sorts?.length > 0) {
      sortReturnValue = data.sorts.find(sort => {
        return sort.name === sortName;
      });
    }
    return sortReturnValue;
  });
};
const getGamesList = params => {
  return httpService.get(gamesApiConstant.getGamesList, params).then(({ data }) => data);
};

const getMediasFromUniverseId = universeId => {
  const getMediasUrlConfig = gamesApiConstant.getGameMedias(universeId);
  return httpService.get(getMediasUrlConfig);
};

const getFirstImageMediaId = universeId => {
  return getMediasFromUniverseId(universeId).then(({ data: { data: result } }) => {
    if (result?.length) {
      return result.find(
        mediaResult => mediaResult?.assetType === gamesApiConstant.mediaTypes.image
      );
    }
    return null;
  });
};

const getGamesPlayabilityStatus = universeIds => {
  const params = {
    universeIds
  };
  return httpService.get(gamesApiConstant.getPlayabilityStatus, params);
};

const getRecommendedGames = (universeId, params) => {
  const getRecommendedGamesConfig = gamesApiConstant.getRecommendedGames(universeId);
  return httpService.get(getRecommendedGamesConfig, params).then(({ data }) => data);
};

const buildUpdatedApiParams = (result, currentApiParams) => {
  const updatedApiParams = { ...currentApiParams };
  updatedApiParams.hasMoreRows = result.hasMoreRows;
  if (result.hasMoreRows) {
    if (result.nextPageExclusiveStartId) {
      updatedApiParams.exclusiveStartId = result.nextPageExclusiveStartId;
    } else {
      const { startRows, maxRows } = currentApiParams;
      updatedApiParams.startRows = startRows + maxRows;
    }
  }
  return updatedApiParams;
};

const getTimeFilterToken = timeFilters => {
  let timeFilterToken = null;
  timeFilters.forEach(timeFilter => {
    if (timeFilter.name === 'PastWeek') {
      timeFilterToken = timeFilter.token;
    }
  });
  return timeFilterToken;
};

export default {
  getGamesSorts,
  getGamesList,
  getSortValueFromStorage,
  buildUpdatedApiParams,
  isSortTokenExpired,
  getGameSortBySortName,
  getTimeFilterToken,
  getFirstImageMediaId,
  getGamesPlayabilityStatus,
  getRecommendedGames
};
