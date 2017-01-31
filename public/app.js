$(document).ready(() => {

    var maxCount;
    
    $('#max-count').keypress(function(e) {
        if(e.which === 13) {
            maxCount = document.getElementById('max-count').value;
            getResults(maxCount);
        }
        if(e.which < 48 || e.which > 57) e.preventDefault();
    });
    
    $('#getresults').click(function() {
        maxCount = document.getElementById('max-count').value;
        getResults(maxCount);
    });

});

function getResults(count) {
    var url = '/download/request?host=';
    url += count;


    $.get(url)
        .then(function(response) {
            //destroy the table first, before setting it to data
            $('#results').bootstrapTable('destroy');
            if(response.length) {
                $('#results').bootstrapTable({
                    columns: [{
                        field: 'name',
                        title: 'Name',
                        sortable: true
                    }, {
                        field: 'hostname',
                        title: 'Host Name',
                        sortable: true
                    }, {
                        field: 'port',
                        title: 'Port',
                        sortable: true
                    }, {
                        field: 'username',
                        title: 'Username',
                        sortable: true
                    }],
                    data: response
                })
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    
}

function queryParams() {
    return {
        type: 'owner',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
        page: 1
    };
}

