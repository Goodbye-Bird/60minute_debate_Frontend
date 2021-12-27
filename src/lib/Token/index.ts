class Token {
  public static getToken(): string {
    return localStorage.getItem("access-token") as string;
  }
}

export default Token;
