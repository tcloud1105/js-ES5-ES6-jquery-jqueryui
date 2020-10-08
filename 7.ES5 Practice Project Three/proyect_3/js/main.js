// ITUNES URL
// https://itunes.apple.com/search?term=ARTIST&entity=album

var musicdb = new musicDB;

function musicDB(){
    this.init = function(){
        this.search();
    }

    this.search = function(){
        var $this = this;
        var form = document.querySelector('#form');

        form.addEventListener('submit',function(e){
           e.preventDefault();
           var value = document.querySelector('#input').value;
           form.reset();

           $this.getData(value);
        })
    }

    this.getData = function(artist){
      var $this = this;
      var http = new XMLHttpRequest();
      var url = "https://itunes.apple.com/search?term="+artist+"&entity=album";
      var method = "GET";

      var container = document.querySelector('#album_list_container');
      container.innerHTML = '';

      http.open(url,method);
      http.onreadystatechange = function(){
    
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
           $this.showArtist(JSON.parse(http.response));
        }else if(http.readyState == XMLHttpRequest.DONE && http.status !== 200){

        }
      }
      http.send();
    }

    this.showArtist = function(obj){
        var container = document.querySelector('#album_list_container');
        var notMatch = document.querySelector('#not_match');
        var template = '';

        if(obj.results.length > 0){
           notMatch.style.display = 'none';

           for(var i=0; i<obj.results.length; i++){
            template +='<div class="col-sm-3 album_item">'
            template += '<div class="item_thumb" style="background: url('+obj.results[i].artworkUrl100+')"></div>'
            template += '<div class="item_title">'+obj.results[i].collectionName+'</div>'
            template += '<div class="item_price">'
            template += '   <span>Price:</span>' + obj.results[i].collectionPrice
            template += '</div>'
            template += '<a href="'+obj.results[i].collectionViewUrl+'" target="_blank">Buy now</a>'
            template += '</div>'
            template += '</div>'
           }
        }else{
           notMatch.style.display = 'block'
        }

        container.innerHTML = '';
        container.insertAdjacentHTML('afterbegin',template);
    }

    this.init();
}