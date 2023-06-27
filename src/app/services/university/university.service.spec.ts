import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { UniversityService } from './university.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('UniversityService', () => {
  let service: UniversityService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UniversityService]
    });
    service = TestBed.inject(UniversityService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('when getUniversities is called',() => {

    let response: any
    let req: any
    const expectedResponse = { message: 'Hello, World!' };

    beforeEach(()=>{
      service.getUniversities().subscribe((res) => {
        response = res;
      });
       req = httpTestingController.expectOne('http://universities.hipolabs.com/search?country=United+States&limit=9');
       req.flush(expectedResponse);
    })

    it('the method called should be GET', () => {
      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe('http://universities.hipolabs.com/search?country=United+States&limit=9');
      // to check params => expect(req.request.params.get('paramName')).toBe('paramName');
      console.log(req.request)
      expect(req.request.responseType).toEqual('json')
    })

    it('should receive a universities array as response', () => {
      expect(response).toBe(expectedResponse)
      expect(response.message).toBe('Hello, World!')
    })

    it('shold give an error when fail', () => {
      service.getUniversities().subscribe({
        next: () => {'failure'},
        error: (error: HttpErrorResponse) => {expect(error.status).toBe(500), expect(error.statusText).toBe('Internal Server Error')}
      })
      
      const errorRequest = httpTestingController.expectOne('http://universities.hipolabs.com/search?country=United+States&limit=9');
      errorRequest.flush('Get universities failed', {status:500, statusText: 'Internal Server Error'})
    })

  })




  // it('call the service function', () =>{
  //   service.getUniversities().subscribe({
  //     next:(resp) => {
  //       console.log(resp)
  //       expect(resp.length).toBeGreaterThan(0);
  //     }
  //   })
  //   expect(result).toBeTruthy();
  //   service.getUniversities().subscribe(universities => {
  //     const req = httpTestingController.expectOne({ method: 'GET', url: 'http://universities.hipolabs.com/search?country=United+States'})
  //     expect(req.request.method).toEqual("GET")
  //   })
  //   expect(service.getUniversities()).toHaveBeenCalled
  // })

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('should retrieve all universities', async () => {
  //   service.getUniversities().subscribe(universities => {
  //     expect(universities).toBeTruthy()
  //     expect(universities.length).toBeGreaterThan(1)
  //   })
  // })

  // it('should call the controller one time', () => {
  //   service.getUniversities().subscribe(universities => {
  //     const req = httpTestingController.expectOne({ method: 'GET', url: 'http://universities.hipolabs.com/search?country=United+States'})
  //     expect(req.request.method).toEqual("GET")
  //   })
  // })

  // xit('should give an error when get universities', () =>{
  //   service.getUniversities()
  //   .subscribe(
  //     ()=>{fail('fail on get universities')},
  //     (error: HttpErrorResponse) => {
  //       expect(error.status).toBe(500);
  //     }
  //   )
  //   const req = httpTestingController.expectOne({ method: 'GET', url: 'Get Failed'})
  //   expect(req.request.method).toEqual("GET")
  //   req.flush('Get Failed', {status: 500, statusText: 'Internal Server Error'})
  // })

  // it('should return a list of universities', () => {
  //   // service.getUniversities().subscribe((universities) => {
  //   //   expect(universities.length).toBe(9)
  //   // })

  //   const req = httpTestingController.expectOne(req => req.url == 'http://universities.hipolabs.com/search?country=United+States&limit=10')

  //   expect(req.request.method).toEqual("GET")
  //   expect(req.request.params.get('limit')).toEqual('9')
  //   expect(req.request.params.get('country')).toEqual('United+States')

  // });

  // it('should return a list of universities', async () => {
  //  service.getUniversities().subscribe(universities => {
  //     const req = httpTestingController.expectOne({ method: 'GET', url: 'http://universities.hipolabs.com/search?country=United+States&limit=10'})
  //     expect(req.request.method).toEqual("GET")
  //     expect(req.request.params.get('limit')).toEqual('9')
  //     expect(req.request.params.get('country')).toEqual('United+States')
  //     expect(universities.length).toBe(9)
  //   })
  // })




});
