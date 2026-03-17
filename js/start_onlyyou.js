function init_onlyyou(){
            // Inicializar la altura de los dos divs
            $("#div_onlyyou").css({"height":$(window).height()+260+"px"});
            $("#div_oy_inner").css({"height":$(window).height()+260+"px"});

            // Configurar fondo personalizado
            var start_bg_img=start_content['bg_img'];
            if(typeof(start_content['bg_style'])!='undefined' && start_content['bg_style']=='bg_custom'){
                if(typeof(start_bg_img)!='undefined' && start_bg_img!=''){
                    $("#div_onlyyou").css({"background-image": 'url('+start_bg_img+')'});
                }
            }


            if(typeof(start_content['chase_title'])!='undefined' && start_content['chase_title']!=''){
                $('.div_oy_text h1').html(start_content['chase_title']); //Cargar contenido personalizado
            }else{
                $('.div_oy_text h1').html('¿Quieres ser mi novia?'); //Establecer valor por defecto
            }

            if(typeof(start_content['chase_text'])!='undefined' && start_content['chase_text']!=''){ 
                $('.div_oy_text .p_oy_text').html(start_content['chase_text']); //Cargar contenido personalizado
            }else{ //Establecer valor por defecto
                $('.div_oy_text .p_oy_text').html('Cariño, me gustas desde hace mucho tiempo. No es solo verte, incluso el hecho de pensar en ti hace que mi corazón lata con fuerza. Te cuidaré mucho, ¿quieres ser mi novia?');
            }
            
            // Configurar la foto antes del texto principal
            if(typeof(start_content['img_bool'])!='undefined' && start_content['img_bool']=='img_true'){ //Si se configuró una foto, mostrarla
                if(typeof(start_content['img_src'])!='undefined' && start_content['img_src']!=''){
                    $(".img_oy_text").attr('src', start_content['img_src']);
                }
            } 
            if(typeof(start_content['img_bool'])=='undefined' || typeof(start_content['chase_text'])=='undefined'){
                var random_img=random_img_as();
                $(".img_oy_text").attr('src', random_img);
            }
        } 


        var array_oy_benefit; 
        //Cargar contenido o establecer valores por defecto
        if(typeof(start_content['chase_benefit'])!='undefined'){
            array_oy_benefit=start_content['chase_benefit']; 
            // array_oy_benefit = array_oy_benefit.filter(function (s) {
            //      return s && s.trim(); // Eliminar valores vacíos
            // }); //Caso donde el trabajo está vacío pero la clave está definida
            if(array_oy_benefit[0]==''){
                array_oy_benefit[0]='Te daré todo mi sueldo';
            }
            if(array_oy_benefit[1]==''){
                array_oy_benefit[1]='Te cocinaré cosas ricas todos los días';
            }
            if(array_oy_benefit[2]==''){
                array_oy_benefit[2]='Te contaré cuentos cuando no puedas dormir';
            }
            if(array_oy_benefit[3]==''){
                array_oy_benefit[3]='Te daré libertad para hacer las cosas que te gustan';
            }            
        }else{
            array_oy_benefit=['Te daré todo mi sueldo','Te cocinaré cosas ricas todos los días','Te contaré cuentos cuando no puedas dormir','Te daré libertad para hacer las cosas que te gustan'];
        }
        console.log(array_oy_benefit); 
        var index_text_oy=0; 

        var count_text_oy=array_oy_benefit.length;
        console.log('Hay un total de '+count_text_oy+' condiciones');
        function oy_show_benefit(){
            var oy_text_height=$(".div_oy_text").height();
            if(index_text_oy<count_text_oy){  
                console.log('Índice actual del beneficio ->'+index_text_oy);                
                console.log('Beneficio actual ->'+array_oy_benefit[index_text_oy]);
                $(".li_oy_benefit").eq(index_text_oy).html(array_oy_benefit[index_text_oy]).show();
                if($(document).height()-oy_text_height<520){ //Ajustar la altura en tiempo real a medida que aumenta el texto
                    $("#div_onlyyou").css({"height":$(document).height()+160+"px"});
                    $("#div_oy_inner").css({"height":$(document).height()+"px"});
                    console.log('Actualización de la altura del documento +120');
                } 
                index_text_oy++;
            } else{
                oy_show_note();
            }
        }

        function oy_show_note(){
            $("#div_oy_note").show(); 
        }

        function oy_hide_note(){
            $("#div_oy_note").hide(); 
        }

        function oy_go_next(){  
            $("#div_oy_yes").show();
            setTimeout(function(){                
                $('#div_onlyyou').fadeOut();
                init_theme(); 
            },2000);
            setTimeout(function(){ 
                $('#div_onlyyou').remove();
            },3000);
        }



    function random_img_as(){  //Obtener una imagen aleatoria de la plantilla
        // console.log('random_img_as'); 
        var random_num=Math.floor(Math.random()*(array_as_pics_s.length)); //Tomar un valor al azar 
        var random_img=array_as_pics_s[random_num];
        return random_img;
    }
