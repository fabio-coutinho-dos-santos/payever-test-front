import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        LoginService
      ]
    });
    loginService = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });
});
