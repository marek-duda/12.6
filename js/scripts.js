var url = 'https://restcountries.eu/rest/v1/name/'; 
var countriesList = $('#countries');

$(document).ready(function() {
    $('#search').click(searchCountries);

    function searchCountries() { 
        var countryName = $('#country-name').val() || 'Poland';  
        $.ajax({ 
            url: url + countryName, 
            method: 'GET', 
            success: showCountriesList 
        }); 
    }
})

function showCountriesList(resp) { 
    countriesList.empty(); 
    resp.forEach(function(item) { 
        $('<li>').text(item.name).appendTo(countriesList);
    }); 
}