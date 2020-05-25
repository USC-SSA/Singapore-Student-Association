function loadPlaces(fileName, $place_container, accent) {
	$.getJSON(fileName, function (makan_guide_json) {
		for (place of makan_guide_json) {
			const place_html = `<div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch place" data-tags="${place.name.toLowerCase()} ${place.areas
				.join(' ')
				.toLowerCase()} ${place.tags.join(' ').toLowerCase()}">
            <div class="card place_card my-2">
                <a data-fancybox="gallery" href="${
									place.thumbnail
								}"  data-caption="<strong>${
				place.name
			}</strong> in <em>${place.areas.join('</em>, <em>')}</em>">
                    <img src="${place.thumbnail}" class="card-img-top" alt="${
				place.name
			}" draggable="false" />
                </a>
                <div class="card-body">
                    <h5 class="card-title">${place.name}</h5>
                    <h6 class="card-title areas ${accent}">${place.areas.join(
				', '
			)}</h6>
                    <p class="card-text tags">${place.tags.join(', ')}</p>
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

$('#makan-search').on('keyup', function () {
	const query = $(this).val().toLowerCase();

	$('.place').each(function () {
		if ($(this).data('tags').includes(query)) {
			$(this).show();
		} else {
			$(this).attr('style', 'display:none !important');
		}
	});
});
