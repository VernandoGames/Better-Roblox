import { EnvironmentUrls } from 'Roblox';

const { gamesApi } = EnvironmentUrls;
export default {
  gamesDefaultSortAlgorithm: 'GamesDefaultSorts',
  gamesHomeSortAlgorithm: 'HomeSorts',
  pageSizeOfHomeSorts: 12,
  pageSize: 40,
  getGameSortsWithDetaultSorts: {
    url: `${gamesApi}/v1/games/sorts`,
    withCredentials: true
  },
  getGamesList: {
    url: `${gamesApi}/v1/games/list`,
    withCredentials: true
  },
  getGameMedias(universeId) {
    return {
      url: `${gamesApi}/v2/games/${universeId}/media`,
      withCredentials: true
    };
  },
  getPlayabilityStatus: {
    url: `${gamesApi}/v1/games/multiget-playability-status`,
    withCredentials: true
  },
  getRecommendedGames(universeId) {
    return {
      url: `${gamesApi}/v1/games/recommendations/game/${universeId}`,
      withCredentials: true
    };
  },
  params: {
    sortToken: null,
    keyword: null,
    exclusiveStartId: null,
    isKeywordSuggestionEnabled: true,
    hasMoreRows: true,
    startRows: 0,
    maxRows: 60,
    gameSetTargetId: null
  },
  recommendedGamesParams: {
    maxRows: 6
  },
  mediaTypes: {
    image: 'Image',
    youtube: 'YouTubeVideo'
  }
};
