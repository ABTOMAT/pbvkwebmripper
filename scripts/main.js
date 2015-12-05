(function () {

    function loadScript(url, callback) {

        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js", function () {
        
// After jQuery loaded

        ripKirillWebms();
		
		// Recolor unread messages to more noticeable color
		
		
		$('head').append('<style>.im_new_msg .im_log_author, .im_new_msg .im_log_body, .im_new_msg .im_log_date { background: #ddd !important; }</style>');
    
		

    });


})();

function ripKirillWebms()
{

        var kirillPosts = $('[href="/assa100500"]').closest('.im_in:not(.ripped)');
        
        var regex = new RegExp(".webm");

        kirillPosts = kirillPosts.filter(function () {
            return regex.test($(this).find('.im_msg_text').text()); 
        });
        
        kirillPosts.each(function(){
            
            var kirillPost = $(this);
            
            var placeholder = $('<tr class="im_in" data-from="" data-date="">\n\
  <td class="im_log_act">\n\
    <div id="" class="im_log_check_wrap"><div class="im_log_check" id="mess_check81441"></div></div>\n\
  </td>\n\
  <td class="im_log_author"><div class="im_log_author_chat_thumb"><span><img src="https://pp.vk.me/c308316/v308316100/b2b6/HzaouMMQQXo.jpg" class="im_log_author_chat_thumb" width="32" height="32"></span></div></td>\n\
  <td class="im_log_body"><div class="wrapped"><div class="im_log_author_chat_name"><span class="mem_link" target="_blank">Проклятый Бомж webm-ripper</span></div><div class="im_msg_text">Проклятый Бомж\'s webm was successfully pwned. <a class="showwebm">Показать</a></div></div></td>\n\
  <td class="im_log_date"><a class="im_important_toggler" onclick="return IM.toggleImportant(81441);" onmouseover="IM.showImportantTT(this);"></a><input type="hidden" id="im_date81441" value="1444730283"></td>\n\
  <td class="im_log_rspacer"></td>\n\
</tr>');
            
            placeholder.find('a.showwebm').click(function(){
                
            placeholder.hide();
            kirillPost.show();
            
            });
            
            $(this).addClass('ripped').hide().after(placeholder);
        
            
        });
    
}
