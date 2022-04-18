//1. Implementar el Patrón Módulo mediante IIFE
const moduleIIFE = (() => {
    const setSrcPrivate = (url, id) => {
      id.setAttribute('src', url);
    }
    return {
      showMoviePublic: (url, id) => setSrcPrivate(url, id)
    }
  })();
  
  //2. Establecer una clase padre denominada Multimedia
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
  
  //3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia 
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
  
  //5. Invocar al método “playMultimedia” para cada instancia creada, mostrando así los videos en el documento HTML.
  $musica.playMultimedia();
  $peliculas.playMultimedia();
  $series.playMultimedia();
  
  //6. Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las instancias creadas.
  $peliculas.setInicio(60);