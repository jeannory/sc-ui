import { environment } from '../../environments/environment';

export class ApiUrl {
    private static readonly BASE_SC_USER_URL = `http://${environment.SC_USER_BASE_URL}:${environment.SC_USER_PORT}`;
    private static readonly BASE_API = '/api';
    private static readonly USERS = '/users';
    private static readonly CONNECTED_USER = '/connected-user'

    static get GET_CONNECTED_USER(): string{
        return `${this.BASE_SC_USER_URL}${this.BASE_API}${this.USERS}${this.CONNECTED_USER}`;
    }
}