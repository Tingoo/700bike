/**
 * Created by thundersoft on 2017/9/14.
 */
$(function() {

    var $el = $( '#baraja-el' ),
        baraja = $el.baraja();

    // navigation
    $( '#nav-prev' ).on( 'click', function( event ) {

        baraja.previous();

    } );

    $( '#nav-next' ).on( 'click', function( event ) {

        baraja.next();

    } );

    // simple fan
    $( '#nav-fan' ).on( 'click', function( event ) {

        openThis();

    } );

   $(".main_bike").one("mouseover",function () {
       openThis();
   });
    function openThis() {
        baraja.fan( {
            speed : 1000,
            easing : 'ease-out',
            range : 90,
            direction : 'right',
            origin : { x : 25, y : 100 },
            center : true
        } );
    }


    // close the baraja
    $( '#close' ).on( 'click', function( event ) {

        baraja.close();

    } );

    // example of how to add more items
    $( '#add' ).on( 'click', function( event ) {

        if( $( this ).hasClass( 'disabled' ) ) {
            return false;
        }

        $( this ).addClass( 'disabled' );

        baraja.add( $('<li><img src="images/6.jpg" alt="image6"/><h4>Serenity</h4><p>Truffaut wes anderson hoodie 3 wolf moon labore, fugiat lomo iphone eiusmod vegan.</p></li><li><img src="images/7.jpg" alt="image7"/><h4>Dark Honor</h4><p>Chillwave mustache pinterest, marfa seitan umami id farm-to-table iphone.</p></li><li><img src="images/8.jpg" alt="image8"/><h4>Nested Happiness</h4><p>Minim post-ironic banksy american apparel iphone wayfarers.</p></li><li><img src="images/9.jpg" alt="image9"/><h4>Cherry Country</h4><p>Sint vinyl Austin street art odd future id trust fund, terry richardson cray.</p></li>') );

    } );

    /*跳转*/
    var $baraja = $(".baraja-container li");

    $baraja.eq(0).find("h2").click(function () {
        window.location.href="#";
    });
    $baraja.eq(1).find("h2").click(function () {
        window.location.href="about5_HJMiniRoad.html";
    });
    $baraja.eq(2).find("h2").click(function () {
        window.location.href="#";
    });
    $baraja.eq(3).find("h2").click(function () {
        window.location.href="about4_HJ2017.html";
    });
    $baraja.eq(4).find("h2").click(function () {
        window.location.href="about1_HJLite.html";
    });
    $baraja.eq(5).find("h2").click(function () {
        window.location.href="about3_YH2017.html";
    });
    $baraja.eq(6).find("h2").click(function () {
        window.location.href="about2_YHMINI.html";
    });
    $baraja.eq(7).find("h2").click(function () {
        window.location.href="#";
    });

});