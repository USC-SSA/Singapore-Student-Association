function loadPlaces(fileName, $place_container) {
	$.getJSON(fileName, function (makan_guide_json) {
		for (place of makan_guide_json) {
			const place_html = `<div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch">
            <div class="card place_card my-2">
                <a href="${place.yelp}" target="_blank">
                    <img src="${place.thumbnail}" class="card-img-top" alt="${
				place.name
			}" draggable="false" />
                </a>
                <div class="card-body">
                    <h5 class="card-title">${place.name}</h5>
                    <p class="card-text">${place.tags.join(', ')}</p>
                </div>
                <div class="card-footer bg-transparent">
                    <a href="${
											place.yelp
										}" target="_blank" class="btn btn-danger yelp-button">
                    <i class="fab fa-yelp"></i> Yelp
                    </a>
                </div>
            </div>
        </div>`;
			$place_container.append(place_html);
		}
	});
}
