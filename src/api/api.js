const fetchPhotos = async function () {
  const response = await fetch(
    "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ad1a207325de8a3844d698543f65a6b2&extras=date_upload&extras=count_faves&per_page=20&format=json&nojsoncallback=1"
  );

  return await response.json();
};

export { fetchPhotos };

const fetchUserName = async function (username) {
  const response = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=ad1a207325de8a3844d698543f65a6b2&user_id=${username}&format=json&nojsoncallback=1`
  );
  return await response.json();
};

export { fetchUserName };



const fetchPhoto = async function(id){
  const response = await fetch(
      ` https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ad1a207325de8a3844d698543f65a6b2&photo_id=${id}&format=json&nojsoncallback=1`
  );
  return await response.json();
}
export { fetchPhoto };