export class Backend{
  private static get baseUrl(): string {
    return 'https://pastelaria-beicola.herokuapp.com/'
  }

  public static get baseUsuario(): string {
    return this.baseUrl + 'clientes'
  }

  public static get baseLogin(): string {
    return this.baseUrl + 'login'
  }
}
