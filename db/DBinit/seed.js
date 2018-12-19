const fs = require('fs');

const mockarooData = fs.readFileSync('./MOCK_DATA.json');
const movieData = JSON.parse(mockarooData.toString());

let movieId = 100;

const possibleDetails = [
  'Closed Caption',
  'Accessibility Devices Available',
  'Dolby Cinema @ AMC',
  'Recliner Seats',
  'Seat Side Service',
  'Reserved Seating',
  'Intermission'
];

let ratings = ['G', 'PG', 'PG-13', 'R'];

const videos = [
  'https://www.youtube.com/watch?v=V2J9FHmuz9Y',
  'https://www.youtube.com/watch?v=AJKjbz9AwTY',
  'https://www.youtube.com/watch?v=p4dCgLUuQbc',
  'https://www.youtube.com/watch?v=rIlDfChEqlc',
  'https://www.youtube.com/watch?v=17BzWOjtbbY',
  'https://www.youtube.com/watch?v=y7UuBhNhJ54',
  'https://www.youtube.com/watch?v=_OsbsI2Fi7I',
  'https://www.youtube.com/watch?v=BhB6TP_os_o',
  'https://www.youtube.com/watch?v=zR84aBHumeY',
  'https://www.youtube.com/watch?v=KQkutS1e1VY',
  'https://www.youtube.com/watch?v=-O-LEVNrkDs',
  'https://www.youtube.com/watch?v=yKNVOb9MNnM',
  'https://www.youtube.com/watch?v=8cRxN3v-BRI',
  'https://www.youtube.com/watch?v=QfZ3NzO7mKo',
  'https://www.youtube.com/watch?v=wb3ffN6-TnM',
  'https://www.youtube.com/watch?v=sY-JoNd0UMw',
  'https://www.youtube.com/watch?v=QdfJ4wHEGx0',
  'https://www.youtube.com/watch?v=zsgCuiIs1AM',
  'https://www.youtube.com/watch?v=4__RCjeU_Yc',
  'https://www.youtube.com/watch?v=iyLjrCe-TO4',
  'https://www.youtube.com/watch?v=yzhb5L-FkMA',
  'https://www.youtube.com/watch?v=F0JVJJDwjp4',
  'https://www.youtube.com/watch?v=fcfi_SaPcak',
  'https://www.youtube.com/watch?v=ZH3wkKwTtdo',
  'https://www.youtube.com/watch?v=lu4JS4LqtFM',
  'https://www.youtube.com/watch?v=qfiZQQ_BdfU',
  'https://www.youtube.com/watch?v=-9hhb3M6c1A',
  'https://www.youtube.com/watch?v=_AODM1tYPIY',
  'https://www.youtube.com/watch?v=4ANaKFnOOjk',
  'https://www.youtube.com/watch?v=50XsksHtDxM',
  'https://www.youtube.com/watch?v=HaweQx7Wd7E',
  'https://www.youtube.com/watch?v=zvdOaAAJQjc',
  'https://www.youtube.com/watch?v=UkguIRqRt4c',
  'https://www.youtube.com/watch?v=9WzYFr1U-Ww',
  'https://www.youtube.com/watch?v=645MBXIjg6A',
  'https://www.youtube.com/watch?v=jmotNp5mXIM',
  'https://www.youtube.com/watch?v=-e4NZYopRgw',
  'https://www.youtube.com/watch?v=iWyiba8Gn9k',
  'https://www.youtube.com/watch?v=VVqJSpHIP8Q',
  'https://www.youtube.com/watch?v=J4M0SRgmXnE',
  'https://www.youtube.com/watch?v=PLg4W4RxY9Q',
  'https://www.youtube.com/watch?v=CORcKP2NPoY',
  'https://www.youtube.com/watch?v=7DvL5u8U3Ps',
  'https://www.youtube.com/watch?v=lagoBp1BsZw',
  'https://www.youtube.com/watch?v=7cj64Z8YgDA',
  'https://www.youtube.com/watch?v=K3OuU9ygRJg',
  'https://www.youtube.com/watch?v=yJ1YEKFT1cQ',
  'https://www.youtube.com/watch?v=C7pCFOm6iaQ',
  'https://www.youtube.com/watch?v=6y1j2JlKILY',
  'https://www.youtube.com/watch?v=BWizU051z14',
  'https://www.youtube.com/watch?v=cSN2XSWOm0M',
  'https://www.youtube.com/watch?v=NHj2qIfTVE0',
  'https://www.youtube.com/watch?v=RSEcNUBv8zY',
  'https://www.youtube.com/watch?v=eaqZZ-LnjgU',
  'https://www.youtube.com/watch?v=_zw0hN8XRS8',
  'https://www.youtube.com/watch?v=i_JPtsWqR7k',
  'https://www.youtube.com/watch?v=CCLIsxBIkxQ',
  'https://www.youtube.com/watch?v=rnuW5p4YHEI',
  'https://www.youtube.com/watch?v=BMwG9-GfcJI',
  'https://www.youtube.com/watch?v=KjqXih2cd5Y',
  'https://www.youtube.com/watch?v=l2sIwa5eg_8',
  'https://www.youtube.com/watch?v=na0Cc4l4mdM',
  'https://www.youtube.com/watch?v=9JuGhzD79C8',
  'https://www.youtube.com/watch?v=af-tf7i6d6s',
  'https://www.youtube.com/watch?v=trZIvFuv4js',
  'https://www.youtube.com/watch?v=z0hB2H7pnDQ',
  'https://www.youtube.com/watch?v=yJiKq5jwI70',
  'https://www.youtube.com/watch?v=FQMueI59dhc',
  'https://www.youtube.com/watch?v=lCDeCZNg92U',
  'https://www.youtube.com/watch?v=W24IK7YJ4fo',
  'https://www.youtube.com/watch?v=oH7v4MMvj4s',
  'https://www.youtube.com/watch?v=eINYpIr7DR8',
  'https://www.youtube.com/watch?v=R0Xa6KBuHPc',
  'https://www.youtube.com/watch?v=qEwQeA7M1Aw',
  'https://www.youtube.com/watch?v=c7maFd-2dZ8',
  'https://www.youtube.com/watch?v=sWKV26Od1Ww',
  'https://www.youtube.com/watch?v=3gkAS2PMULI',
  'https://www.youtube.com/watch?v=SRM8wtoJNgA',
  'https://www.youtube.com/watch?v=gAN5fVYys24',
  'https://www.youtube.com/watch?v=nECI3FLzfIU',
  'https://www.youtube.com/watch?v=D2y9ec8lSGk',
  'https://www.youtube.com/watch?v=waESi_k8AH4',
  'https://www.youtube.com/watch?v=vAJ24sI5CLE',
  'https://www.youtube.com/watch?v=ifbLeBskpew',
  'https://www.youtube.com/watch?v=dolxUIZzb3w',
  'https://www.youtube.com/watch?v=ludUFNuA-lE',
  'https://www.youtube.com/watch?v=PGVWAbYED38',
  'https://www.youtube.com/watch?v=aS8iV4otbQA',
  'https://www.youtube.com/watch?v=-07rvS06yCQ',
  'https://www.youtube.com/watch?v=5q6u6xLERkk',
  'https://www.youtube.com/watch?v=tmY1s3TwZOs',
  'https://www.youtube.com/watch?v=T9Rr5oHpP74',
  'https://www.youtube.com/watch?v=euYIDFmPt5w',
  'https://www.youtube.com/watch?v=NtGn-JRdXVM',
  'https://www.youtube.com/watch?v=S-ll4COapu8',
  'https://www.youtube.com/watch?v=BFWgnbVPVHs',
  'https://www.youtube.com/watch?v=hvBSq9rV41Y',
  'https://www.youtube.com/watch?v=oZy3hT-aIT8',
  'https://www.youtube.com/watch?v=RxZfZHe1cis'
];

const adjustData = () => {
  for (var i = 0; i < movieData.length; i++) {
    const movie = movieData[i];

    //MOVIE ID
    movie['MovieId'] = movieId++;

    //THEATER DETAILS
    let amountOfDetails = Math.floor(
      Math.random() * (possibleDetails.length - 2) + 2
    );
    let details = [];
    for (var x = 0; x < amountOfDetails; x++) {
      details.push(possibleDetails[x]);
    }
    movie['TheaterDetails'] = details;

    //MOVIE RATING
    let randomIndexRating = Math.floor(Math.random() * ratings.length);
    movie.Info['Rating'] = ratings[randomIndexRating];

    //MOVIE RUNTIME
    let runtime = Math.floor(Math.random() * (130 - 85) + 85);
    movie.Info['Runtime'] = runtime + ' min';

    //PHOTOS
    for (var k = 0; k < movie.Photos.links.length; k++) {
      movie.Photos.links[k] = 'https://picsum.photos/300/300/?random';
    }
    movie.Cast[0].Photo = 'https://picsum.photos/300/300/?random';
    movie.Cast[1].Photo = 'https://picsum.photos/300/300/?random';

    //MOVIES
    for (var y = 0; y < movie.Trailer.links.length; y++) {
      let randomIndexMovie = Math.floor(Math.random() * videos.length);
      movie.Trailer.links[y] = videos[randomIndexMovie];
    }
  }
};

adjustData();
