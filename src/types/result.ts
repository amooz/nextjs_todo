export interface Result {
  status: 200 | 500; // Simpliifed status codes
  data: any;
  error?: Error;
}
