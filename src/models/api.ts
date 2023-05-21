interface ApiResponse {
  location: {
    country: string;
    timezone: string;
  };
  ip: string;
  isp: string;
}

export default ApiResponse;
