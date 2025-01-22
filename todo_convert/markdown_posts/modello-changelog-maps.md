# Modello: Changelog Maps

**Data:** 2021-02-24




  
    
    
    

    

   
     
     
   

   
     
     
     
   

   
     
     
     
   

   
     
     
   

   
     
   

   
     
     
     
   

   
     
     
   

   
     
   

   
     
     
     
     
     
     
   

   
     
     
     
   

   
     
     
     
   

   
     
     
     
   

   
     
     
   

   
   

   
   

   
   
   
   
   
   

   

   
   
   
   
   

   
   
   

   

   
   
   
   
   

   

   
   

   
   

   
   
   
   

   

   

   
   
   

   
   
*/

/* Content
----------------------------------------------- */
body {
  font: $(body.font);
  color: $(body.text.color);
  background: $(body.background);
  padding: 0 $(content.shadow.spread) $(content.shadow.spread) $(content.shadow.spread);
  $(body.background.override)
}

html body $(page.width.selector) {
  min-width: 0;
  max-width: 100%;
  width: $(page.width);
}

h2 {
  font-size: 22px;
}

a:link {
  text-decoration:none;
  color: $(link.color);
}

a:visited {
  text-decoration:none;
  color: $(link.visited.color);
}

a:hover {
  text-decoration:underline;
  color: $(link.hover.color);
}

.body-fauxcolumn-outer .fauxcolumn-inner {
  background: transparent $(body.background.gradient.tile) repeat scroll top left;
  _background-image: none;
}

.body-fauxcolumn-outer .cap-top {
  position: absolute;
  z-index: 1;
  height: 400px;
  width: 100%;
}

.body-fauxcolumn-outer .cap-top .cap-left {
  width: 100%;
  background: transparent $(body.background.gradient.cap) repeat-x scroll top left;
  _background-image: none;
}

.content-outer {
  -moz-box-shadow: 0 0 $(content.shadow.spread) rgba(0, 0, 0, .15);
  -webkit-box-shadow: 0 0 $(content.shadow.spread.webkit) rgba(0, 0, 0, .15);
  -goog-ms-box-shadow: 0 0 $(content.shadow.spread.ie) #333333;
  box-shadow: 0 0 $(content.shadow.spread) rgba(0, 0, 0, .15);

  margin-bottom: 1px;
}

.content-inner {
  padding: $(content.padding) $(content.padding.horizontal);
}

$(content.background.color.selector) {
  background-color: $(content.background.color);
}

/* Header
----------------------------------------------- */
.header-outer {
  background: $(header.background.color) $(header.background.gradient) repeat-x scroll 0 -400px;
  _background-image: none;
}

.Header h1 {
  font: $(header.font);
  color: $(header.text.color);
  text-shadow: $(header.shadow.offset.left) $(header.shadow.offset.top) $(header.shadow.spread) rgba(0, 0, 0, .2);
}

.Header h1 a {
  color: $(header.text.color);
}

.Header .description {
  font-size: $(description.text.size);
  color: $(description.text.color);
}

.header-inner .Header .titlewrapper {
  padding: 22px $(header.padding);
}

.header-inner .Header .descriptionwrapper {
  padding: 0 $(header.padding);
}

/* Tabs
----------------------------------------------- */
.tabs-inner .section:first-child {
  border-top: $(header.bottom.border.size) solid $(tabs.border.color);
}

.tabs-inner .section:first-child ul {
  margin-top: -$(header.border.size);
  border-top: $(header.border.size) solid $(tabs.border.color);
  border-left: $(header.border.horizontalsize) solid $(tabs.border.color);
  border-right: $(header.border.horizontalsize) solid $(tabs.border.color);
}

.tabs-inner .widget ul {
  background: $(tabs.background.color) $(tabs.background.gradient) repeat-x scroll 0 -800px;
  _background-image: none;
  border-bottom: $(tabs.border.width) solid $(tabs.border.color);

  margin-top: $(tabs.margin.top);
  margin-left: -$(tabs.margin.side);
  margin-right: -$(tabs.margin.side);
}

.tabs-inner .widget li a {
  display: inline-block;

  padding: .6em 1em;

  font: $(tabs.font);
  color: $(tabs.text.color);

  border-$startSide: $(tabs.border.width) solid $(content.background.color);
  border-$endSide: $(tabs.bevel.border.width) solid $(tabs.border.color);
}

.tabs-inner .widget li:first-child a {
  border-$startSide: none;
}

.tabs-inner .widget li.selected a, .tabs-inner .widget li a:hover {
  color: $(tabs.selected.text.color);
  background-color: $(tabs.selected.background.color);
  text-decoration: none;
}

/* Columns
----------------------------------------------- */
.main-outer {
  border-top: $(main.border.width) solid $(body.rule.color);
}

.fauxcolumn-left-outer .fauxcolumn-inner {
  border-right: 1px solid $(body.rule.color);
}

.fauxcolumn-right-outer .fauxcolumn-inner {
  border-left: 1px solid $(body.rule.color);
}

/* Headings
----------------------------------------------- */
div.widget > h2,
div.widget h2.title {
  margin: 0 0 1em 0;

  font: $(widget.title.font);
  color: $(widget.title.text.color);
}

/* Widgets
----------------------------------------------- */
.widget .zippy {
  color: $(widget.alternate.text.color);
  text-shadow: 2px 2px 1px rgba(0, 0, 0, .1);
}

.widget .popular-posts ul {
  list-style: none;
}

/* Posts
----------------------------------------------- */
h2.date-header {
  font: $(date.header.font);
}

.date-header span {
  background-color: $(date.header.background.color);
  color: $(date.header.color);
  padding: $(date.header.padding);
  letter-spacing: $(date.header.letterspacing);
  margin: $(date.header.margin);
}

.main-inner {
  padding-top: $(main.padding.top);
  padding-bottom: $(main.padding.bottom);
}

.main-inner .column-center-inner {
  padding: 0 $(main.padding);
}

.main-inner .column-center-inner .section {
  margin: 0 $(main.section.margin);
}

.post {
  margin: 0 0 $(post.margin.bottom) 0;
}

h3.post-title, .comments h4 {
  font: $(post.title.font);
  margin: .75em 0 0;
}

.post-body {
  font-size: 110%;
  line-height: 1.4;
  position: relative;
}

.post-body img, .post-body .tr-caption-container, .Profile img, .Image img,
.BlogList .item-thumbnail img {
  padding: $(image.border.small.size);

  background: $(image.background.color);
  border: 1px solid $(image.border.color);

  -moz-box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
}

.post-body img, .post-body .tr-caption-container {
  padding: $(image.border.large.size);
}

.post-body .tr-caption-container {
  color: $(image.text.color);
}

.post-body .tr-caption-container img {
  padding: 0;

  background: transparent;
  border: none;

  -moz-box-shadow: 0 0 0 rgba(0, 0, 0, .1);
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, .1);
  box-shadow: 0 0 0 rgba(0, 0, 0, .1);
}

.post-header {
  margin: 0 0 1.5em;

  line-height: 1.6;
  font-size: 90%;
}

.post-footer {
  margin: 20px -2px 0;
  padding: 5px 10px;

  color: $(post.footer.text.color);
  background-color: $(post.footer.background.color);
  border-bottom: 1px solid $(post.footer.border.color);

  line-height: 1.6;
  font-size: 90%;
}

#comments .comment-author {
  padding-top: 1.5em;

  border-top: 1px solid $(body.rule.color);
  background-position: 0 1.5em;
}

#comments .comment-author:first-child {
  padding-top: 0;
  border-top: none;
}

.avatar-image-container {
  margin: .2em 0 0;
}

#comments .avatar-image-container img {
  border: 1px solid $(image.border.color);
}

/* Comments
----------------------------------------------- */
.comments .comments-content .icon.blog-author {
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9sLFwMeCjjhcOMAAAD+SURBVDjLtZSvTgNBEIe/WRRnm3U8RC1neQdsm1zSBIU9VVF1FkUguQQsD9ITmD7ECZIJSE4OZo9stoVjC/zc7ky+zH9hXwVwDpTAWWLrgS3QAe8AZgaAJI5zYAmc8r0G4AHYHQKVwII8PZrZFsBFkeRCABYiMh9BRUhnSkPTNCtVXYXURi1FpBDgArj8QU1eVXUzfnjv7yP7kwu1mYrkWlU33vs1QNu2qU8pwN0UpKoqokjWwCztrMuBhEhmh8bD5UDqur75asbcX0BGUB9/HAMB+r32hznJgXy2v0sGLBcyAJ1EK3LFcbo1s91JeLwAbwGYu7TP/3ZGfnXYPgAVNngtqatUNgAAAABJRU5ErkJggg==);
}

.comments .comments-content .loadmore a {
  border-top: 1px solid $(widget.alternate.text.color);
  border-bottom: 1px solid $(widget.alternate.text.color);
}

.comments .comment-thread.inline-thread {
  background-color: $(post.footer.background.color);
}

.comments .continue {
  border-top: 2px solid $(widget.alternate.text.color);
}

/* Accents
---------------------------------------------- */
.section-columns td.columns-cell {
  border-$startSide: 1px solid $(body.rule.color);
}

.blog-pager {
  background: $(paging.background);
}

.blog-pager-older-link, .home-link,
.blog-pager-newer-link {
  background-color: $(content.background.color);
  padding: 5px;
}

.footer-outer {
  border-top: $(footer.bevel) dashed #bbbbbb;
}

/* Mobile
----------------------------------------------- */
body.mobile  {
  background-size: $(mobile.background.size);
}

.mobile .body-fauxcolumn-outer {
  background: $(mobile.background.overlay);
}

.mobile .body-fauxcolumn-outer .cap-top {
  background-size: 100% auto;
}

.mobile .content-outer {
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .15);
  box-shadow: 0 0 3px rgba(0, 0, 0, .15);
}

.mobile .tabs-inner .widget ul {
  margin-left: 0;
  margin-right: 0;
}

.mobile .post {
  margin: 0;
}

.mobile .main-inner .column-center-inner .section {
  margin: 0;
}

.mobile .date-header span {
  padding: 0.1em 10px;
  margin: 0 -10px;
}

.mobile h3.post-title {
  margin: 0;
}

.mobile .blog-pager {
  background: transparent none no-repeat scroll top center;
}

.mobile .footer-outer {
  border-top: none;
}

.mobile .main-inner, .mobile .footer-inner {
  background-color: $(content.background.color);
}

.mobile-index-contents {
  color: $(body.text.color);
}

.mobile-link-button {
  background-color: $(link.color);
}

.mobile-link-button a:link, .mobile-link-button a:visited {
  color: $(mobile.button.color);
}

.mobile .tabs-inner .section:first-child {
  border-top: none;
}

.mobile .tabs-inner .PageList .widget-content {
  background-color: $(tabs.selected.background.color);
  color: $(tabs.selected.text.color);
  border-top: $(tabs.border.width) solid $(tabs.border.color);
  border-bottom: $(tabs.border.width) solid $(tabs.border.color);
}

.mobile .tabs-inner .PageList .widget-content .pagelist-arrow {
  border-$startSide: 1px solid $(tabs.border.color);
}
]]>

    
      
      
      

      
    

    
      
    

    
  

  
  
    
      <script type="text/javascript">
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener('load',
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent('onload', function(){ object[attribute] = val; });
      }
    }
  </script>
<div id="navbar-iframe-container"></div>
<script type="text/javascript" src="https://apis.google.com/js/platform.js"></script>
<script type="text/javascript">
      gapi.load("gapi.iframes:gapi.iframes.style.bubble", function() {
        if (gapi.iframes && gapi.iframes.getContext) {
          gapi.iframes.getContext().openChild({
              url: 'https://www.blogger.com/navbar/4936169656290171289?origin\x3dhttps://www.blogger.com',
              where: document.getElementById("navbar-iframe-container"),
              id: "navbar-iframe"
          });
        }
      });
    </script><script type="text/javascript">
(function() {
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//pagead2.googlesyndication.com/pagead/js/google_top_exp.js';
var head = document.getElementsByTagName('head')[0];
if (head) {
head.appendChild(script);
}})();
</script>

    
  

  
    
      
      
        
      
    
  

  
    
    
      
      
    
    
    
    
    
    
    
      
      
    
    
  

  
  
    
    
      
      
    
    
    
    
    
    
    
      
      
    
    
  

  
  
    
    
  
  
  
  

    
    
    
      
      
    
    
    
    
      
        
          
            
            0
            -1
            false
            false
            BEHIND
            0
          
          

  
    
      
      
        
          
            
              
            
          
          
        
      
        
          
            
              
            
          
          
        
      
    
      
      
        
          
        
        
        
          
        
      
    
  
    
    
      
        
          
        
      
      
    
  

          
  
    
  

          
  
    
  

        
      
    
    
    
      
      
    
    
    

    
    
      
      
    
    
    
    
      
      
    
    
    
      
      
    
    

    
    
      
      
    

    
    
    

      

        
        
          
          
        
        
        
        
        
        
        
          
          
        
        

        
        
          
          
        
        
        
        
        
        
        
          
          
        
        

        
        
          
          
        
        
        
        
        
        
        
          
          
        
        

        
        

        
        
          
            
              
                comments
                false
                By
                TextAndImage
                at
                
                true
                1x1
                false
                true
                1
                #ffffff
                
                false
                #ffffff
                false
                #ffffff
                Location:
                true
                #ffffff
                #ffffff
                true
                Labels:
                false
                false
                false
              
              
  
    
    

      

      
        
          </div></div>
        
        
          <div class="date-outer">
        
        
          
        
        
          <div class="date-posts">
        
        
          
          
        

        
        
          
            
          
        
      
      
        </div></div>
      
    

    
    

    
    

  
    
  

              
              
              
  
    
    
      
        
      
      
      
      
    
      
      
      
      
      
    
    
    
      BLOG_CMT_createIframe('');
    
  

              
  
    
      
        
      
    
      
        
      
    
  

              
  
    :
  

              
  
    
  
    
  

              
  
    
    
      :

      
        
          
            
               
            
               
          

          

          
             
            
             
            
          
        
      

      
        
          
            
              
                
              
              
              
                
              
              
                
              
                
              
              
            
            
              
                
              
                
                  
                
              
            
            
              
                
                  
                
                
              
            
          
        
      

      
        
          
            
          
          
            
          
           
          
           
          
            
          
          
            
          
        
      

      
        
          
            
          
            
          
        
          
        
      
    
    
      
        
        
      
    

  

              
   
    
      
        
      
    

   
    
      
        
      
    
  

              
  
  
  
      ()
  
  

              
  

              
  
    
      
        
      
    

    
      
        
          
        

        &rsaquo;

        
          
            
              
                
              
            
          

          
            
          
        

        
      

      
        
      
    
  

              
    
    

      

      
        
          
        
      
        
          
        
      
    

   

              
  
    
      
      &lsaquo;
      
    

    
      
      &rsaquo;
      
    

    
    
    

    
      
    

  
  

              
  
    
      
    
    
      

        
          
            
          
          
          

          
          
            
              
                
              
                
              
                
              
            
          

          
            
          

          
            
             
          

          
            
              
                
                  
                    
                      
                      
                        
                      
                    
                  
                    
                      
                    
                  
                
              

              
                
                  
                  
                    
                    
                  
                
              

              
                
              
            

            
              
                
                  
                
              
            

          
        

        
      
    
  

              
  
    
      
      
      
    

    
      
      
      
    

    

    
      
        
      
    

  
  

              
  
    
      
    
    
    

    
    
      
      
        
      
        
      
      
    

    
    
    

    
    
      
       
    

    
      
        
      
    

    
    
      
        
          
            
              
                
                
                  
                
              
            
              
                
              
            
        
      

      
        
          
          
            
            
          
        
      

      
        
      

      
        
        
          
          
            
          
          
        

        
        
      

      
      
        
      

      

      
      
        
          
          
            ,
          
        
      
      

      
      
        
          
          
        
      
      
      
        
          
            
          
          
            
              
            
          
          
        
      
    
  

              
  
    
      
        
      
    
  

              
  

              
  
  
    
      
    
    
      
        
      
    
  
  
  

              
  
    
    
      
      
      
      
    
      
      
      
      
    
    
    
      BLOG_CMT_createIframe('');
    
  

              
  

  
    (function() {
      var items = ;
      var msgs = ;
      var config = ;

//  0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        var text = (entry &&
                    ((entry.content && entry.content.$t) ||
                     (entry.summary && entry.summary.$t))) ||
            '';
        if (entry && entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '' + text + '';
            }
          }
        }
        return text;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length 
  

              
  
    
    :

    
      
      
         
      
    

    
      
        
      
        
      
    

    
      
        
        
      
    

    
    
    
    
  

            
            
              
                false
                true
                true
                true
              
              
  
  
    
  
  

  

              
  
    
      
    
    
      
        
      
    
    
      
    
  

  
    .image {
      width: 100%;
    }
  

            
          
        
        

        
        
          
          
            
            
            
            
          
          
        
        

        
        
          
          
            
            
            
            
          
          
        
        

        

        
      
      

    
    
    
    
      
      
    
    

    
    
    
      
      
    
    
    
    
      
        
        
        
        
      
      
      
        
          
            READ THE LICENZE BEFORE DOWNLOADING THE DATAPACK: https://github.com/Loweredgames/Skyblock-Classic-Edition/blob/main/LICENSE  NOT APPROVED BY OR ASSOCIATED WITH MOJANG STUDIO READING THE COPYRIGHT (C)
          
          
    
      
       
      
    

    
  
        
      
    
    
    
      
      
    
    
    

  
  
  
  
    
    
  
  
  

  
    window.setTimeout(function() {
        document.body.className = document.body.className.replace('loading', '');
      }, 10);
  



  
  
    

    
      
      
      
        
          
        

        
          
        

        
          
            
          
        

        
          
            
          
        
      
      
      

      
        
      
    
  



  
    
      https://www.planetminecraft.com/member/loweredgames/
      NONE
      https://prototypemaps.blogspot.com/
      My Texture pack
      https://simple-default-texturepack.blogspot.com/
      Videogames
      https://www.curseforge.com/members/lorenzogiannini2000/projects
      Planetminecraft
      https://uberrex-studio-changelog.blogspot.com/
      Curseforge
      Prototype Maps
    
    


 
   
     
       
     
   
   
 

  
  
    
      NONE
      Coming Soon
      https://
      Edge
      https://github.com/Loweredgames/Edge
    
    


 
   
     
       
     
   
   
 

  
  
    
      HIERARCHY
      yyyy
      false
      MMMM
      dd
      d/M
      false
      false
      DAILY
    
    
  
    
  
  
  
  
    
    
    
  
  
  
  

    
  
    
      
         ()
      
    
  

    
  
    
      
        
        
          
        
        ()
        
        
      
    
  

    
  
    
    
       ()
    
  

    
  
    
      
    
  

    
  
    
      
        ▼ 
      
        ◄ 
      
        ► 
      
    
  

  

  
    
      FREQUENCY
      CLOUD
      BE,DOWNLOAD,JE,LTS,PRIVATE
      USER_SELECTED
      true
    
    
  
    
  
  
    
      
        
          
            
              
            
              
            
            
              ()
            
          
        
      
    
      
        
          
            
          
            
          
          
            ()
          
        
      
    
    
  

  
  
    
      SIMPLE
    
    
  
    
  
  
  
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: '',
        autoDisplay: 'true',
        layout: google.translate.TranslateElement.InlineLayout.
      }, 'google_translate_element');
    }
  
  
  

  

  
    
      FREQUENCY
      CLOUD
      BETA-VERSION,BUILDING,CHANGELOG,LTS,OLD-CHANGELOG,PRE-RELEASE,RECAP,RELEASE-CANDIDATE,VERSION,WEBSITE-AND-OTHER
      USER_SELECTED
      true
    
    
  
    
  
  
    
      
        
          
            
              
            
              
            
            
              ()
            
          
        
      
    
      
        
          
            
          
            
          
          
            ()
          
        
      
    
    
  

  

  
    
      1
      NONE
      Changelog Maps
      https://minecraft-map-building-versions.blogspot.com/2021/02/changelog.html#more
    
    


 
   
     
       
     
   
   
 

  

  
    
  

  

  
    
      true
      true
      true
      WHITE_TRANSPARENT
      ALL_TIME
    
    
  
  
    
    
      
      
        
        
      
      
      
      
    
  

  

