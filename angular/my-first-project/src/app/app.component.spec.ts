import { async, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Hello ANGULAR!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hello ANGULAR!');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-first-project app is running!');
  });
  it('show login button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    //app.isAdmin = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul+button.btn')?.textContent).toContain('Login');
  });
  it('show logout button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.isAdmin = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul+button.btn')?.textContent).toContain('Logout');
  });

  it('check login status and compare it to service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.loginAdmin();
    const loginService = fixture.debugElement.injector.get(LoginService);
    fixture.detectChanges();
    expect(app.isAdmin).toEqual(loginService.isAdmin);
  });

  it('check isAdminLoggedin async task', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.whenStable().then(() => {
      const app = fixture.componentInstance;
      const loginService = fixture.debugElement.injector.get(LoginService);
      let spy = spyOn(loginService, "isAdminLoggedin")
      .and.returnValue(Promise.resolve(false));
      fixture.detectChanges();
      //loginService.isAdminLoggedin().then((data)=>{console.log(data)});
      expect(app.adminLoggedIn).toEqual(loginService.isAdmin);      
    });
  }));
});
