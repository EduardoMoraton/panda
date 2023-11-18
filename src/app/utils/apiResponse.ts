interface ApiResponse {
  data: {
    type: string;
    id: string;
    attributes: {
      title: string;
      'last-update': string;
      description: string | null;
    };
    meta: {
      'cache-control': {
        cache: string;
      };
    };
  };
  included: {
    type: string;
    id: string;
    groupId: string | null;
    attributes: {
      title: string;
      description: string | null;
      color: string;
      type: string | null;
      magnitude: string;
      composite: boolean;
      'last-update': string;
      values: {
        value: number;
        percentage: number;
        datetime: string;
      }[];
    };
  }[];
}

export default ApiResponse;