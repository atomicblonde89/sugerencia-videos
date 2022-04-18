const moduleIIFE = (() => {
    const setSrcPrivate = (url, id) => {
      id.setAttribute('src', url);
    }
    return {
      showMoviePublic: (url, id) => setSrcPrivate(url, id)
    }
  })();
  
  class Multimedia {
    constructor(url) {
      let _url = url;
      this.getUrl = () => _url;
  
    }
    get url() {
      return this.getUrl();
    }
    setInicio() {
      return 'Este método es para realizar un cambio en la URL del video';
    }
  }
  
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      let _id = id;
      this.getId = () => _id;
    }
    playMultimedia() {
      moduleIIFE.showMoviePublic(this.url, this.getId());
    }
    setInicio(tiempo) {
      this.getId().setAttribute('src', `${this.url}?start=${tiempo}`);
    }
  }
  
  
  let $musica = new Reproductor('https://www.youtube.com/embed/nlVA_e6WQhw', musica);
  let $peliculas = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', peliculas);
  let $series = new Reproductor('https://www.youtube.com/embed/MfvvhM6IJS0', series);
  
  $musica.playMultimedia();
  $peliculas.playMultimedia();
  $series.playMultimedia();
  
  $peliculas.setInicio(60);