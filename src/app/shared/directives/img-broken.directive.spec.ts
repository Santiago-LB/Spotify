import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

//TODO Componente de Prueba
@Component({
    template: '<img class="testing-directiva" appImgBroken [src]="srcMock">',
    standalone: true,
})
class testComponent {
  public srcMock: any = null;
}

//TODO La prueba de ImgBroken es la siguiente

describe('ImgBrokenDirective', () => {
  //TODO Declarar
  let component: testComponent;
  let fixture: ComponentFixture<testComponent>;

  //TODO COnfiguracion Previa
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ImgBrokenDirective, testComponent],
});

    //TODO Crea el componente
    fixture = TestBed.createComponent(testComponent);
    //TODO Instanciamos
    component = fixture.componentInstance;
    //Detectar los cambios
    fixture.detectChanges();
  });

  //TODO Deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElemnt = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElemnt);
    expect(directive).toBeTruthy();
  });

  it('Test  ImgBroken Directive deberia instanciarse 👊👊', () => {
    expect(component).toBeTruthy();
  });

  //TODO done:DoneFn se usa para decirle cuando finalizar l prueba
  // it('directiva deberia cambiar imagen', (done: DoneFn) => {
  //   //TODO Arrange
  //   const beforeImgElement = fixture.debugElement.query(
  //     By.css('.testing-directiva')
  //   ).nativeElement;
  //   const beforeImgSrc = beforeImgElement.src; //TODO Tenemos la URL antes de ser cambiada por la directiva
  //   component.srcMock = undefined;

  //   setTimeout(() => {
  //     const afterImgElement = fixture.debugElement.query(
  //       By.css('.testing-directiva')
  //     ).nativeElement;
  //     const afterImgSrc = beforeImgElement.src; //TODO Tenemos la URL despues de ser cambiada por la directiva

  //     expect(afterImgSrc).toEqual(
  //       'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUXGBkYFxgYGBgYGBsYGRcXFx0YFxgYHSggGBolGxcXITEhJikrLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGy8lICUtLSsrLS8tLS0vLS8tLS0uLS0tLTUvLS4vLS0tLS0tLS0tLS0uLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAEDBQYCB//EAEIQAAEDAgQDBgMGBAQEBwAAAAEAAhEDIQQSMUEFUWEGEzJxgZEiocFCUrHR4fAHYnLxFSMzkiRDgrIUFhc0VHPi/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAECAwUEBgf/xAA1EQACAQMDAgMECAcBAAAAAAAAAQIDBBESITEFQRNRYQYiMnEUgZGxwdHh8BUjQlKSofEk/9oADAMBAAIRAxEAPwDCpBPCdo52G66is4KULpyQQAgNND0v80wA5/vkkkUAMQnLdDa6TkzmkGDqEhiCUJinlAE1XCvY1jnNID5LZGoaYJHMSoAFNVxb3Maxz3FrJyNJkNmJgbTAUbHkTBIkEGNwdiks9wGhMQui2PXT5hM4JgMTMaW+epv++SZSU6ZcYHInXYCTr5Lqo4GSGhvQTGm1yZMHVAEQJ8k7nk7mJm5nXfz09kgFygBLqmwkw0EnkNUxCZACTQuxv8o5/uUoA19vz/JGRpZOITEpyUkCOqdOZu1sNm9pjYcyuJSUraDiC6LDU7X6oAjKZOAmTA67s9PcfmnXCSALHF4djQ0tfmkAxa2s722shjGy5lPsgRyU7j8uke6Iw1RnxGowu+AhsHLDoADjGoH1Q02On7/ugYgRK5PNPSYXODRJJ5CVoOGdmZGas8NA+zmAnpm/RJvAJGdlJxXpOB4dgAA3uqUn7T2l3/dYyjq3Z/BOADsNTdP2qeakdf5THyUNZLSeTynBW84x/D4Q5+Cq5udJ9nc4Dt/X3WHBfSflcHNc1wJBsQ5unqJN+qkmmLBy0xcapLmV20eyYh+vJMHQZGqYkbKQ1JaBa07Dc7nU+qAOACU7mERIibjqDv8Aik955mOXpC5KAEAkb6DpZXHZ7h7alRpc9gAddpJmPKFx2hwFKk+GVM3QCw9VT9Ij4vh9yeh6dRUEJwmaJsne2DHJXkB83L33/RcuTt84TFIbeRNFjrpt5jXomTJ+kpiErTB8ZfTovoiMr4nnbrrKqk5CWAHcUydpEGRta+hkX62keqRKAGTp7dUkwOykV0wxcdR7iD+KZsA3HpMIEcuKUOcQ25OgH0Sy7BW3Z/Dg56n3RA83Tfpa3qhjD+DcME5AYgTUeOXTkOSucY0uY0U2ZaLZc07OMkFxJM/jsh+AYtjRUz+LKcoPhcY0dHlAGl1oOB4qkWNL6bqj4yuY0Zg0F0D4RYaD2CqbJozmFY5zg1gJJ8WjhrOYchH1Wjq8SdQp904Ah0ZKgHwmRYg+55/igeJmmXxSpPpsYS4xckC7iQTrtHmFHj6wrUQ5jDNMnNTJkZSIPdgaRc9EnuMt+F8RNeAxpbUGj7ljiCLOi4tIPmFF267NDFUjVptjEUxItHeNiSw9dY8uqA4JxSnSqCMwpx8NhE2MuvYxIWr4lxWG0XtcCxzgP6gQRb0v6KPD2A8GzKRpt9Ff/wAQOGChjagaAA+KgH9Uz6Zg5ZxquW6KySbbJSuXH6JSmB1KeUqTSZAIiJMkDTz1PTVckoAnwuKNN0t12SxeIL3FxGuvLSJUGichLSs57jy8YGTlK0bzPpFv1TlSEcrp4i1vMGy6Ywm1rb2geZTVA0aGTudvRLO+B6XjJwAkU7Wk2F/0umTEO330tz6Jguu7tLZMCXW0vHqLi/VcIAdd0KeZ0Zmt1u6wsCdgfJcm6Kp4UAZqhgbD7R8hsOp+ai3gaTYJ7pKX4Uk8hgXeGZ6RYdI/Bc7EyPLcpzUkAQLE33Mxr7KOUyI5cth2PwXeYWrHiFXU6ABgufdZHEOa53wy0GPEZiw1IHOdlsv4ZYtuatQdo5ocBzizh82pS4JIbA4dznQQ4Ug4Nc8C0iYk+YVrw7G1CC1jnF5aQMsERp8TjoQJvBR3Haj6WWjTBc8va+0ZGgghrGgbwRdV1YVWMDZZnqNcXR4jr47WO0afCq+SRa/4S2lVJq1D3Zu0iSToXNc4XBnlO6t8RwVgpOFEuB1GYyC6zgDN9teu6A7JVD3JY9uZk/aMubIuWk6iVf3a6CcxN2n7w9ozAKDGeY08NUdUNGCHzLg+JzNBETpEei0XDmtY1mFxAkPfmbcy0/DERYCdup9bjjTiyvQdAyvJYSRpMX53EjyVPx3hLzUqVBJALAxovcwDH3bD6oyBmv4qH/iKJIg91HoHu/VYsLVfxLxefGZZBNKmxhjTNBe6PVyygV0eCD5Oi5Jdl8t0brrfMZH4CPmo0xE2IDA74C4iB4gAZgTptMrltSARAvF7yI5Xi/UJOOwAtNwTe/n+C4lAHdNwBkienod/NJromwuIvtcG3W3zXJFv3qnby2QAlI1oF3ew1P5JGqAMrb3mT9B9VESluyWyJXVi74dBsBz+qiT+n6pBNLAm2+RJl246TFraAe/M9SuUxCKloU3Os3zPLzO25v1UjMMAM1QwNh9o+Q2HU/NNWxBIhoyt5DfzO5UNWeCWnHJIHtp+GHO+8fCPIHXzKgq1CTJMk31lRga38uqWW025a39k1HAnLJ3HUfP8klGkpETuvVzGcrW2AhulgBPmYURXfouYQMRRHDca6jUbVZq0z5jceoUJgnYAnrA+sJZLSdEm0NI9ew+JGIpMqUiQS0NDt2gHeL/aLZV7wzhFGAO6EAAZiZJ313Erxns9x9+GdaSwm7QYIP3mnSY2NjuvV+zfaOjWg03tJOrPC8dS36hVSi0STNB/h7WRkAAG306ofE4aW5LiQSwjY6xKLqViRLdeRQleoYkm4dI+GbbiygMErsFajTnXNINwQ4B3sf3dVXaPiTcK01DdrRDGz43x8I+Uk7CVFxztbRw7SHODqkk5GQTJ0nZsdfZeX8e45VxVTPUNgIYweFo6TqeZ3UoxyJsAxFd1R7nvMucS5x5kmSVGQk5KVcQHJlMmKv8AgnY/FYkBzGBjCLOeS0Hq0XJ9oSckuRxi5PCKFJbpnYAUj/xOJyNP3Gkf7i7Qeii7QdhRQZnp1S4A3a+LjmC2NlDxoeZd9GqYzgxZMmbDp/dIfP8Ae61mM7DPbHdVmVbT4S0HoDJWZxeEfScW1Glp5flzUozjLhlc6cofEiIGPVJpT6zoPwTg+X7HVTIHKS6aY2B118oTAIAkosc6QB1Olo3k6BTGo1nhhzvvHwj+kHU9T7boilw6u9oDaZDf9snmZuUQ3s1WOpaPUn6KiVWmvikjrhaV5fBB/PBTuqkzJknU3lcq+HZp4/5jfYrpvZeodHt9ikrqjxqJvpt1zo+78zPp1d1ezFcC2Q+To/FVuLo1Gn/MEEANtGgFvD0CthVhP4Wc1W2q0lmcWgZOnhJWlGTldtYXGAJPQKanhrS45R8z5BKribZWDK3fmfM7qvVnZFunG7GLWs8QDnDYeHTUka+nVD1ahcb+wsPQDROVzCajjcTlnZDAJNPvsU7mx+ieFIiWOH7RYtghuIqgdXE/90qPE8XxNY5X16jptGYgX6CyBhO7yH59SlgMnA3t5dL/ALHqkF0mhAhK37NdnK2MqQwRTaR3lQ6NHSdXRsn7N9nauMqZadmNI7x5sGgn5u1gfgvZ+HcOp0mjDUxFOm0W3cTeXHfqqatXTsuToo0de74KfhvZLBUR3jGBxaYzvOcyBqAbA+QXPGMTmYXVAW0i4Na0GHPMxJds3yurAtLXuc/LTotJGUCC90RPl85CDpE4qpmqU8uGo/E2QRmcNABuNyuCUnLk16cIwWVx+9vmVvbGm1jKdAGGPqNpkyfha4wXXS7dVHSzD0xLnOawdZt+/JAcZa/FOqPa0OZScIbeHOEOIt7eqscdlxlE16LnseBleIh9J8fvzQPuA9oeKUKDaeHztDmNDbWEjf3QRpsxVEmu8uAdkL9XUqmxzHxNMbovg2GpYTBzIdinl3evIl2tmhx0ZGwVLjMb/kvyxTa4tNRo8Li0nK7ofiMwpKWkrdJz2wZjHYQ0nlroNgWkaOa4S1w6EH9woQJsB5ALROwZxVKl3UE0yWEnTu3fE2T0dnt/MtDwfgNOiJ8T93H6cguid1GMc9/I5KXTqlSbXCXcznDOy73/ABVSWj7v2vXktJhOGU6XgYB11PuVbUsOXENGpUGO4nhaByvJqP5MmB7CfWy481rh+hrf+Sxjl8+ff9CAhcvcF1/i+GqWDXUzsSDCAxziw6yDoRoVXWtKtJZkjps+pW908U5bktSsAhKvEY0QGIxKq8TiFzJGhJpIn4jxdxtKrGA5C4m7zbyH6pmUy9wHMwicZGfKNGjKPTU+607Ol72Tz3Vrn+XpXcChJSQktXB5vIqtQkySo4XcJAKKWCxyyRhMuyEg39+aeBZOAupMRtrHVdAJ4QGTjJ6psq7TwgMkeVLKtLwvgIdSL3VKWlhnBM8jGhiTfkqTFUwxzmghwuARMeYmD7quM1JtID1z+HuCFLAMLoBqE1XHoTAn/pa1Xdd9Nh76oADte9tJ5noo3VmNosfpSaxhaBaRlBaPJVNfghxkPxD3Nabim0lvw/zEXHkFmzk3I2qUFGCy9jvDVqeJz1qn+jSMbwXCDtrEj3VHxrtSarjQoMe8xoxpdAO5gQArriHD3HDtw+CptbSBLRBDWgzcnmJJ53QWMq0+HUG0aRGc+N/2nvOrz+A5CAol+f8AnkAdiqWLw2ZuLa1lJ7/haS3vJedSBMAdT6JuOOOHfUfSMO0cNnAXghcY6mG4qk2rVzNaO9d/M5sENH/UfkqvieMNQvc6xc4ny2/C6MglnZE2NoN7t73udmcQabQYApkAgk7kzPQLLVHvxLv/AA1ASNKj9mj6nopuIcQfi3DDYe8ANc/7LGi1+sCIW27Ndn2UKYpsHmd3HclUykdtKCit/rf4L8R+DcLbRptpsFgNdydyequaOEUxa1gugMVxPYKOEuSzMqm0FsQ9qMaaGFcacd48loPIAD6lYfB0LXJJPiJ1J5laHjrzVoEC7mZiPJ36hBcCDajA4es7HkV6TpCg4Nrk8D7Vzq0p4lx+8D4XBnZPj8K5rXMJsRmZ0I1H4e60eFw4CpeNYgGvlBtTYc3RziIHnAXZeqM6TTPPdCu6qvYuH1mMdi580K58lcVRL3RpmP4qWiy9l4/Skz7BKq5xQfw5uXNUP2Rb+o2H5oTLKMxNg2mNBc9Xfpp7oYBbVrTcYZfLPJdQrqpVwuFsRwElJlTrpwcOSM8tkshidhqpHBcwlgs1EYanyqd1MBrTmBJJBbeWgRBNovJ05KOEYDUWj+zlbuRWawlpgzIsIMzeNd5VXUoltjHoQfwR1TilZ1IUi9xYNG7IRjG5hmJyyMxEExvAnWFGKl3DURZeUH390uX09N1IdTGl0g399U8Bk7oYpzLNNpmCARPUKF+uimdSJLjBMXNtASBJ5XI91GQlpQaj2iu0V24WbMqAPIGkZM8fgFJisM12Zzqrm5tmx4eSqeyPFG1sNTBkPw+UG1vhEa9WjTzVtXw9Egv7x8fdEW9SFkTjiTR6CjPVCL9Cs4uapbSbg3sphph2c2a03LiNXnUxuVRcS7O4XFPLHYyu97G53hrqYtIE5Q2Q2TzR3EcNgiYqOqX51i35CFIzBYfD03soU8heBmJkvIGxcbx0UEy5rsY/jnCMrc+DxNRz2CAKha+ekgAhYfh2KxWLqdyXED7e0DQ9V6FxXI05haBc9Oqzn8PIfVr1I1M+5JSc8RbwWwo66kFl4ec+uDddk+z7KLRTpt8zuTzJWpfVp0xGdo62+qosVxHuMPUqbgfICT9F5pRrVsS/O9xubCbAdF2WNk6yyZ/V+pK3lp4SPUMccwLmVA8dP0WerYpR8F4W8H4SQf3qFB2houpOzR/UPqi/6Y6S1RYuie0lO5n4Ujp2LIMj99Co2NlxqUKgp1D4mOux3pz6hVxxE3Q1aouG1uqlu8xNzqfTqF9DFRGlficW5uU1KVMbuaC53pMAH3VNj8Uyiw06RzON3ONySdXOO5VfTLnnKC4ztJRvFOAvw5aKgEubmEGdea7a3UKlaODDs+hW1nP3SlaxWGHpZRm+0bNH1XVHCgDO7TYczyHTqneSTO/T6KNpbOb1y4+8n1O/VJOnB7/d+pDC6y2HrvfnMfvRdAJzzK18HmskeUpLqEk8BkY6ybqXEOaXl7GBrZs2cwERaTqE2W60/DuzrKlBxFUT4jEmCBvadCbeSqqSUN2ThmWyMo1xBkaiCDy8kzh5c+UdEbUwozhjHBxJy7tueeaIUDmbW/tZTSyR1EIGljr7+ScRO+Wb6Ex572UrxYXG9hNtvK/RM1o6i3nP5J6Q1EZaJtpNp1jqneBtb535hdAJZUaQ1EeS0+n7CWVdvMBCO4jliaZkeoKtVCbjqS2F4izg1fZPtAMPmp1BLHEGd2mCJ6gg/Jariz2d2H0HCHCbm3uvKTxNpNqbgPMT1VxwviOKqSzDMeWjY5Ib1JdYLPurCck5xWPPJqWN+oNQluu2OSy47jKFMB1YvOWHHKIuL/uEzu2uGrtB7zKdw74T89fRUeM7J4ivUBxeIz/yU7gesAT5D1V5wvsTTbBFMNaNSbn3Kxmox2zl+nB6SMKk2pNJR9efsMvx7ibsR/lYdri02c6DfoOnVaTspwo4elDvE65/JEcQ41Sw1dtDKzI5oyvH392uPsiXV50VdSTxg7belDU5d+PkdcZpmrhqlNusGB5i3zHzVP2IwjagHMWI3Csm4rKZ9x0QtXhpL/8AxGDqinUPiB8JPX7p9IK2+kXcYxcG8M8j7UdMqVH4keH+8Ho2A4a1t1ju1tdlSrVa0ghgDXf1EEkecEe6CrY3ib25H1qVJu7mwXEdIH5Kp4lXZQpd1TJJM3N3OcdXOXVdVYxg8vJi9I6dUVaLSxgocNWMQpS+VDSpwiaWHLjYeuy80k5PCPo+pQjmTwkPQfBkaq0qOJh1QknZpNz58go6OHa0WudyR+AKnxBl7nc3E6Ab8hYei1rawfNT7PzPM9Q61HeND/L8iDFOzOJBJG0gC3kCQF0ymWZg5gu37VoBiHDmb2T5V06+t7RebR+4WrpwsHm3Uy8sGyp4EaX57eUfVSlibIngWshypIv4Pun3H5JIwGsgjRGUOI1GzlcRYgAW1XJJy5ZOWZjadJTHD2naY1v7eqbgnyRVVrgGqSTJSLZOwt+A6blE5TETb9/kE5aIiB53lPSHiAZYpKhJMkybdNgIspu7S7tGkPEBsq5fZFimo34UOdvrYbDp1VlOMM5nx6CdR9iuu42EnkLo/C8BrVNGgf1H8pWh4PwuYAHy0W44XwkNFwubqftOrWGimkl27s0LTpamtdVs8/w38OKjxaq0O6tJEe6uOzHYTEYN1V9bEU3sflhrQ4XE87aHr6L0FgiA0LO8ZdWxRyYZ4bSacrqxGbMZhzaLftAaF5tIgTdeal1S6uYaqzxHyNm2tqVKopQ29QPiOKw2HEkhx2AuT6bLGca4/Vry1nwNAk3gAc3OK2XG+xTG02uYXFwgOzOu8cy4+F3pCp8NwNoIL2tcQbME920873e7+Z1+UaKtTU+DdoVKclqTz8zKYTgQrtLHAmm4XqGxzbOpNNzHMxI80FhMVVwtQ4bEeIeF2zm7EHcL0mrRa0FzyBFySYAWK7WYvD4luQC7ZLKotlPr4m81NYxpkWTyn4lPlc+qOKmKlCHFkGWuIPMGFR4bEVCIJ0tI3RLXqpppnT4mpboPr8TrG3eH2H5IWnQc4zcnmbp+HUxWeWg+HxEXA5CefRaTDUQyMo0j5LRt7GtXWqTwvUwL7rNrZvRBJy8l+LKyhw6ILvQIwU/bojsQ9zoLjMAAeQ2HJRZVtW9pCitlv5nkb7qla6l7z93sgYsTine/rF/7ojImDF06Tg8QHypZERlTZOiNIeIQZIN7rnIiQxNkRpDxAfIkiMqSNIeISBgmTpyGv4LjIiMilOE+APzNMuIygy60XIGgv8k8YK9eQAtTsCIeJv8AonpBoPxAkQbTG1jPndPAKe4MWpd2i8Pg3vMMaXeQUmK4dVp+Njh6T8wo5WcE1qazjYAyKy4Lw41HaWCsuGcBDwH1JaDo0cuZnRarhXDmUxDRA+ayeqdSp2tJvuathZSnJTn8J1wvhrWAWVo1chdL5nVuKlat4lQ9ER1sN3manJa0j4jNyNMo5A7n03kGU2MYA1oAAAAAsAALADYIKoDtPpqg8Qyu7wujraV6OjXpTppyklhbblbptvOQXtpjCKcNJzH2jnKyeI4zVp0W1H0iA45e82LoJzBsSRbX8VrWcFYDnrvdVI2cZAPloqztBj2VG5HAFlwGnS3RW2dPxKmLffPL7fUdSvY29NKWML7TzLjOKrv+Oq/O3Ytgs9IsD53VLUcX+X71WqxvDaVOnVrZnsAaZa12trDrfYrzqrWqPs5xI5aD2C2F06q5YZL+NUXBSjunx2LGvj2MsDmPIfUoMVatdwY22YwGj6lNhsAXaAkmwAuT6Lc9l+AGiDUqCHmwGuUfmVq2/TIU95cmF1DrdRxe+PRBXCOGNoUhTb5uPN25VhVZBIGgNtNOsWU2RM5i0VHB5N1XJtvkHLV0Kamy9F01zmzBiRBg6g6z+SMCUyCo4uOYm/PyXAapw1dGnyRgNYLlTlimLE+XojAtZBlXOVECmSQBqVoKlPD4UMNQZn776jkqa1WNJbnVbW87htR7GWyJLVf45hPuN/2hJc306Pkd38Kn/cigLEzmLUM7Psbd7yRy0+ajyYPNBaf91ldK8prg5odMuJLfC+sz1HCud4Wk+QlGcN4QXuPeS1o12J6BavDVQQAwZWjSFNjKNNwGYmeYK5p3snlJYO+l0qMWnKWfQr6VZrAGUgGtU/eHdwUOIw1MtAa8hx0Jv7hZjG8Xewljx8TTBXG99zUUUlhI2mEpg/ETI5qSpxFgsFRtqudQaWaHZDAtGtyuedvCctU1kt8RqOlGop8QadAi6VSRKyj6zANxG6teG4z4b6rP6lYRq0X4cVq7FlKbb3Zbueha2MA0uqXiHHWM8UxvCCwuPfiL0HAAaysy09n0nqrPPoWSqxXATj+JEmJVBiGlx1Bm9p9rrSMwlOc1Y5jvFgfNDYjg9KoHtbUyZgQMuoBEWnQr2dn9Ht4qMVg8/f0ruv5YyeP9o+MurVHUaQJYHADLJLy2dANpk+gRnB+xtV8OrzTby+2fo31v0W9wnZylg/hpMAkRn1cfN2vpopSFqU1q97PJlXF9Kl/JhHGNt+Sv4dwylRtTZlHPxO9SdUQWKeE2VW4Mt1XLdkbKYg2ExqTEeXNR90RfqjKWHLpjXlf+ykHDah+yVByinuy2EKkllRbK7Lb9/vZMWKwxGAqN8TT6XQ+VSi1JZRGeqDxJYZB3dgZHleR5/vZNlU5allTwV6yDKmLUSyiSbAlWDeB1CJJaOh1UJ1IQ+Jl1KlVq/BFsF4RT/wA9pAzAE3gxob9FS9qXRUdvOi2tDB5GZS/XxH6DooaXB6Qf3jvjO06BZF1VVSe3Y9T063lRpe9y9/keYRU+672KS9azN5D2SXPg7wXiuK+AOmQQL9eSyNfGtzjRaPg2AZWw7WPJOh1XT+y+DAAcySN8xn8UABYPi+Z7abNTyRXHMXlEEmdo5qfhfAsPRqGpTzZogSZieSqON4yKhaWAtG6YHPDcaXXdqLorjXDu+yVW2mA703UGGxmHzBxkGIPJXFHitIjI30QMmZQLKYvDQFScXx7AQ4QShMfx97nupAHMNlnKrXvqZLydjsUAHY7ipdabarU8AxLnslZTGdnS0AioD94aeyvuFY1lHKwmSUhl7iqlMXqNGl+oXOAxNJtPPTaGi6mpY+iRL2gj+YD5KHGYfD16eRru7H8sBAgWnjRVkgiJUFeg2RFQgk2/VEYbsyymPhrOjqAiGcHYTJfMX0hAEtBvw5HgkHfl1CgqcJcL5mxz/REVeM0mDLMxaykwPEadWQNtZV1K4nTWInFc2FG4ac1uVxw9EGDUJPQKY8PY0Z3OJbyi/wDZWAqUQfsz0TuaSfheCORUndVX3K10u1X9H+2U+N4zRpMBaLHQKtPbFotoryvgqTXF72STzEgeQVVxCjgniH0mid22PyVDeeTvjFRWFsjjC9q2TdyMoYujXdlDSHHkPmVQM7CN72m+lWJZMw4XHLzW6o4RrPCIgXO6lCcovMWV1aNOqsTWQEYCiJDiZHVSxTY0kUx5kT8yoa/FqVJ0GJKhPaZgMWUpVqkuWV07OhT+GCO/8TaNHMaNwNVyzHUnutUcD5riu3DYhpDmhpP2m2IPNB8G7MNp1M763etB+AAR/uVTZ0JJbI0OEawjMbjqpwaZ0IVVxfFVAC1lN2mw2WNbx803anXfZAz0WGckliP/ADUkngDO8M7TuYAJsEZiO1bjoVhg9dteUgNxg+1bmi9ygMTxcvcSd1nGuOymbUQBZ4jiG4RHCMY4umVROMlWHDm3kmyQzeM4TUrVmYho+FoDTcDN9TCLxXZJlSp3jq7840AADQOUan3UWB4uG0g1ugCqqvaEyYKYGhpcKo02EVTmcbZpI8o5LCdo8PTpYsU6TnEFrSZMkEk7+Ss63FXPLQTupKnC2F5rPGZzo9ggAzidKKQg6N5qv4NjXOdli3PZF4hjasgvIby8kRw/BZWnu6ZjmgAjiPHRTGUXgbc+SKrYgUqALyc7wJB1E7dEBgeAf5nf1rBt2s67Eqk7VcUJfEoAFxuMLXHZE8C4pkJOsmP7rK4jGFxuU9HFFuhSA9C4phpYa1FxzC5aLgjeFRf+Y6lNwHxTuCgeD8bcx0uJgbJYrtOC4ANEAzomBteBdojVOVzT1kK5PCaB+Mt66rAP7StqNAAAcNxZX/BO0AgB5sgMF7iON0KUAETMJq3FQWktMrP8e4RSxFNz6By1G/EQT8JA1HQqjfxE06QaLoEBdosXLzc6qqwtepUe2nTlznGGgaonC4api6uSmJcZPtutp2X7FNwpbXrOmsJgA/C23zMboGTdm+yWI1rPjmxvxH1OgWvLO7AApPt/KSoeH8Yp1GVKZeGO2LjEiBefdRYutE/8XTk83t/l09Q73U4xT5eCEpNdjqpWftSqX/lKo+MdkaWJ/wAyoKlF+hcBY8pB3VkzH/EZxVMAEf8AMp3u7QSYEZbbwu8Xx6lTova6uyo5whoDg4zlA20GaT0TlBR7piUm+xlP/Txv/wAo/wCz/wDSSK/x4pKBM8jbqpWJJJCJqafdJJAyWkj8NokkogaTg/hPkqfHf6pSSUhk1Lxj0Wjf4Wp0kAcUN1p8B4W+iZJMDviOi8w7Tf6hSSSAzW6IYkkogcPQVTVJJAwrBrTYPQJJIGjRcO8D/wCk/gs9ifAf6SkkpCDP4Xf+6d/9Tv8Auat7xfQpJII9zJO1Kz3F/EkkgkVT9URw3/UTpIAvUkkkxH//2Q=='
  //     );

  //     //TODO FInalizar la prueba
  //     done();
  //   }, 3000);

  //   //TODO Act
  // });

  // it(' Directiva deberia de cambiar la imagen por un base64', (done: DoneFn) => {
  //   //TODO: Arrange
  //   const beforeImgElement = fixture.debugElement.query(
  //     By.css('.testing-directive')
  //   ).nativeElement;
  //   const beforeImgsrc = beforeImgElement.src; //TODO Tenemos la url antes de ser cambiada por la directiva
  //   component.srcMock = undefined;
  //   setTimeout(() => {
  //     const afterImgElement = fixture.debugElement.query(
  //       By.css('.testing-directive')
  //     ).nativeElement;
  //     const afterImgsrc = beforeImgElement.src; //TODO Tenemos la url despues de ser cambiada por la directiva
  //     // expect(afterImgsrc).toEqual(
  //     expect(afterImgsrc).toMatch(/\bdata:image\b/);
  //     done();
  //   }, 3000);
  // });
});
