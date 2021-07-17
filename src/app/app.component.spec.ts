import { componentFactoryName } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('#handleClick', () => {
    it('should add clicked index to visits', () => {
      app.handleClick(5);

      expect(app.active).toEqual(5);
      expect(app.visits.size).toEqual(1);
    });

    it('should clear visits after all squares have been clicked', () => {
      [...Array(16).keys()].forEach((num: number) => app.visits.add(num));

      expect(app.visits.size).toEqual(16);

      app.handleClick(0);

      expect(app.active).toEqual(0);
      expect(app.visits.size).toEqual(1);
    });
  });

  describe('#hasBennVisited', () => {
    it('should return true if the index has been visited', () => {
      app.visits.add(0);
      app.active = 1;

      expect(app.hasBennVisited(0)).toBeTruthy();
    });

    it('should return false if the index has not been visited', () => {
      app.visits.add(0);
      app.active = 1;

      expect(app.hasBennVisited(2)).toBeFalsy();
    });

    it('should return false if the index has been visited but is also active', () => {
      app.visits.add(0).add(1);
      app.active = 1;

      expect(app.hasBennVisited(1)).toBeFalsy();
    });
  });
});
