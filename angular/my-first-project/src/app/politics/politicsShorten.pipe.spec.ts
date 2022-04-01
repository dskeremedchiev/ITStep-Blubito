import { politicsShortenPipe } from './politicsShorten.pipe';

describe('Pipe: politicsShortenPipe', () => {

  it('Try to create an instance', () => {
    const pipe = new politicsShortenPipe();
    expect(pipe).toBeTruthy();
  });
  it('Test partei name shorten', ()=>{
    const pipe = new politicsShortenPipe();
    expect(pipe.transform('Demkratishe Union')).toEqual('DU');
  });
  it('Test partei with comma name shorten', ()=>{
    const pipe = new politicsShortenPipe();
    expect(pipe.transform('Изправи се мутри вън')).toEqual('ИСМВ');
  });
});
