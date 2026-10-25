document.getElementById('header-placeholder').innerHTML = `
  <header>

  



<svg xmlns="http://www.w3.org/2000/svg" style="display:none">

    <symbol id="icon-decor" viewBox="0 0 24 24" fill="none">
        <path d="M17 21L18.0001 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M21.5002 14H18.0002C15.6686 10.8114 14.4399 6.94968 14.5002 3" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.50007 21L6.5 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M3 14H6.49994C8.83153 10.8114 10.0603 6.94968 10 3" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 21V5C3 3.89543 3.89543 3 5 3H19.5C20.6046 3 21.5 3.89543 21.5 5V21" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22.5 21H1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M17 17H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-lighting" viewBox="0 0 24 24" fill="none">
        <path d="M12 21V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M16 7L15.2279 9.31623C15.0918 9.72457 14.7097 10 14.2792 10H9.72076C9.29033 10 8.90819 9.72457 8.77208 9.31623L8 7"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 21H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.5 14H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M10.5 17H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <rect x="5.5" y="3" width="13" height="4" rx="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-garden" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M3 16H13C13.5523 16 14 16.4477 14 17V19H2V17C2 16.4477 2.44772 16 3 16Z" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 21V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 21V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4 12H12C12.5523 12 13 12.4477 13 13V16H3V13C3 12.4477 3.44772 12 4 12Z" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <ellipse cx="19" cy="8.5" rx="4" ry="5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19 9V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.43506 3.5188C9.35978 3.61493 10.0468 4.41905 9.99748 5.34744C9.94813 6.27583 9.1797 7.00257 8.25 7.00012H4.5C3.67157 7.00012 3 6.32855 3 5.50012C3 4.6717 3.67157 4.00012 4.5 4.00012C4.49826 2.9899 5.25139 2.13757 6.25414 2.01491C7.2569 1.89226 8.19325 2.53794 8.43506 3.5188Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-featured" viewBox="0 0 24 24" fill="none">
        <path
            d="M8.31315 7.75912C8.46506 7.91103 8.46506 8.15733 8.31315 8.30924C8.16124 8.46116 7.91494 8.46116 7.76302 8.30924C7.61111 8.15733 7.61111 7.91103 7.76302 7.75912C7.91494 7.6072 8.16124 7.6072 8.31315 7.75912"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.244 3.02509L10.093 3.00009C10.624 2.99509 11.135 3.20509 11.511 3.58009L20.415 12.4881C21.196 13.2691 21.196 14.5361 20.415 15.3171L15.321 20.4141C14.54 21.1961 13.272 21.1961 12.491 20.4141L3.58 11.5001C3.209 11.1291 3 10.6251 3 10.0991V7.28709C3 6.76109 3.209 6.25709 3.58 5.88609L5.86 3.60509C6.228 3.23709 6.725 3.02909 7.244 3.02509Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-services" viewBox="0 0 24 24" fill="none">
        <path d="M3 16.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 21H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 21V16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 16.5V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 16.5V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 7.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 7.5V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 12V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 7.5V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 21V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V21" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-tools" viewBox="0 0 24 24" fill="none">
        <path
            d="M5.74002 11.26L2.80002 8.32002C2.39999 7.91945 2.39999 7.27058 2.80002 6.87002L5.87002 3.80002C6.27058 3.39999 6.91945 3.39999 7.32002 3.80002L9.26002 5.74002"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M18.2602 14.7402L20.2002 16.6802C20.6003 17.0808 20.6003 17.7297 20.2002 18.1302L17.1302 21.2002C16.7297 21.6003 16.0808 21.6003 15.6802 21.2002L12.7402 18.2602"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M11.7663 9.10254L4.14848 16.7203C3.588 17.2795 3.36871 18.0954 3.57333 18.8602C3.77795 19.6251 4.37534 20.2225 5.14017 20.4271C5.905 20.6317 6.72088 20.4124 7.28007 19.8519L14.8979 12.2341"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M11.7659 9.10234C11.3329 7.83387 11.4298 6.44439 12.0345 5.24824C12.6393 4.05209 13.7008 3.15036 14.9791 2.74705C15.6202 2.53392 16.2989 2.45797 16.9713 2.52415C17.3489 2.57458 17.6649 2.83569 17.7856 3.19709C17.9063 3.55848 17.8107 3.95707 17.5391 4.22435L15.7349 6.02849C15.6411 6.12224 15.5884 6.24942 15.5884 6.38203C15.5884 6.51465 15.6411 6.64183 15.7349 6.73558L17.2642 8.26494C17.4595 8.46019 17.7761 8.46019 17.9714 8.26494L19.7755 6.4608C20.0427 6.18924 20.4413 6.09359 20.8027 6.21428C21.1641 6.33498 21.4252 6.65095 21.4756 7.02861C21.5419 7.70096 21.4659 8.37972 21.2527 9.0208C20.8495 10.299 19.9478 11.3606 18.7516 11.9654C17.5555 12.5701 16.166 12.6669 14.8976 12.2339"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-organizer" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M21 16.0407V7.95872C21 7.24372 20.619 6.58372 20 6.22672L13 2.18572C12.381 1.82872 11.619 1.82872 11 2.18572L4 6.22572C3.381 6.58372 3 7.24372 3 7.95872V16.0417C3 16.7567 3.381 17.4167 4 17.7737L11 21.8147C11.619 22.1717 12.381 22.1717 13 21.8147L20 17.7737C20.619 17.4157 21 16.7557 21 16.0407Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 22.08V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M12 12L20.73 6.95996" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M3.26953 6.95996L11.9995 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-bathroom" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M14.5268 9.12012H11.4738C10.7908 9.12012 10.3088 8.45112 10.5248 7.80412V7.80412C10.8598 6.79812 11.8008 6.12012 12.8608 6.12012H13.1388C14.1988 6.12012 15.1398 6.79812 15.4748 7.80412V7.80412C15.6908 8.45112 15.2088 9.12012 14.5268 9.12012V9.12012Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M6.99326 13.2627H4.00026C3.38626 13.2627 2.91726 13.8107 3.01226 14.4167L3.35626 16.6167C3.66026 18.5647 5.33726 19.9997 7.30826 19.9997H16.6923C18.6633 19.9997 20.3403 18.5647 20.6443 16.6177L20.9883 14.4177C21.0833 13.8117 20.6143 13.2637 20.0003 13.2637H12.2633"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13 6.12V6C13 4.343 14.343 3 16 3V3C17.657 3 19 4.343 19 6V13.263" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.158 17.263H9.105C7.943 17.263 7 16.321 7 15.158V13.153C7 12.516 7.516 12 8.153 12H11.11C11.747 12 12.263 12.516 12.263 13.153V15.158C12.263 16.321 11.321 17.263 10.158 17.263Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.04 19.7998L5 20.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19 20.9998L17.96 19.7998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-kitchen" viewBox="0 0 24 24" fill="none">
        <path d="M5 4.16016H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M21 4.16016H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M4 21H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 3H18C18.5523 3 19 3.44772 19 4V10C19 11.6569 17.6569 13 16 13H8C6.34315 13 5 11.6569 5 10V4C5 3.44772 5.44772 3 6 3Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 18V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 18V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 18V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15 18V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18 18V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>

    <symbol id="icon-furniture" viewBox="0 0 24 24" fill="none">
        <path d="M5 18.1963V21.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M19 18.1963V21.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M20 11V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V11" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16 15H8C6.89543 15 6 14.1046 6 13V13C6 11.8954 5.10457 11 4 11V11C2.89543 11 2 11.8954 2 13V13C2 16.3137 4.68629 19 8 19H16C19.3137 19 22 16.3137 22 13V13C22 11.8954 21.1046 11 20 11V11C18.8954 11 18 11.8954 18 13V13C18 14.1046 17.1046 15 16 15Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>

</svg>

<!-- end icone -->
<div id="top" class="text-white ads d-flex h- align-items-center justify-content-between">
    <span class="gap-2 d-flex">
        <span>خرید بیش از یک میلیون تومان ارسال رایگان</span>


        <span class="border-end pe-2 ads-secondary">خدمات رایگان</span>
    </span>
    <span class="gap-2 d-flex">
        <span>50%تخفیف</span>

        <span class="border-end pe-2 ads-secondary ">فروش بهاره</span>
    </span>
</div>








<!-- Start Navbar1 -->
<div class="nav d-flex justify-content-between ">
    <div class="gap-4 right d-flex">
        <a href="./index.html">
            <img src="./assets/img/home-img/Group 1261152885.png"></a>
        <div class="box position-relative ">

            <input type="search" placeholder="جستجو">
            <!-- Start search1 -->
            <div class="search1 ">
                <input type="search">

                <p>بیشترین جستجوهای اخیر</p>
                <span class="d-flex gap-3 flex-wrap ">
                    <span>اسمگ</span>

                    <span>یخچال فریزر</span>
                    <span>تخت خواب</span>
                    <span>سرویس غذاخوری</span>
                    <span>جاروبرقی</span>
                    <span>لوازم کمپ</span>
                    <span>تلویزیون</span>
                    <span>سرویس آکروپال</span>
                </span>
                <p class="mt-5">جستجوی های پرطرفدار</p>
                <span class="d-flex gap-3 flex-wrap ">
                    <span>میزعسلی</span>

                    <span> سطل</span>
                    <span>تخت خواب</span>
                    <span> بشقاب</span>
                    <span>جاروبرقی</span>
                    <span> صندلی فلزی</span>
                    <span>تلویزیون</span>
                    <span>سرویس آکروپال</span>
                </span>


                <div class="search2">
                    <input type="search" placeholder="لیوان">
                    <p>کالاهای مربوط به لیوان </p>
                    <div class="d-flex flex-column  ">
                        <a href="">

                            <span>
                                <img src="./assets/icon/Search.svg">
                                لیوان چینی</span>
                            <br>

                            <span>در دسته بندی آشپزخانه</span>
                        </a>
                        <a href="">

                            <span>
                                <img src="./assets/icon/Search.svg">
                                لیوان فلزی</span>
                            <br>

                            <span>در دسته بندی آشپزخانه</span>
                        </a>
                        <a href="">

                            <span>
                                <img src="./assets/icon/Search.svg">
                                لیوان سرامیکی</span>
                            <br>

                            <span>در دسته بندی آشپزخانه</span>
                        </a>
                        <a href="">

                            <span>
                                <img src="./assets/icon/Search.svg">
                                لیوان پلاستیکی</span>
                            <br>

                            <span>در دسته بندی آشپزخانه</span>
                        </a>
                        <div></div>

                    </div>
                    <p>جستجوی پرطرفدار</p>
                    <div class="d-flex flex-wrap justify-content-start">
                        <a href="">سرویس آکروپال</a>
                        <a href="">میزعسلی</a>
                        <a href="">سطل</a>
                        <a href="">تخت خواب </a>
                        <a href="">بشقاب</a>
                        <a href="">جاروبرقی</a>
                        <a href="">صندلی فلزی</a>
                        <a href="">تلویزیون</a>
                    </div>
                </div>

            </div>
        </div>


        <!-- End saerch1 -->


    </div>
    <div class="flex-row-reverse left d-flex">
      <a href="./cart.html" class="pt-2 pe-3 me-3 sabad "><img src="./assets/icon/Shopping.svg"></a>

      <li class="nav-item  me-lg-0 dropdown">
        <a data-mdb-dropdown-init class="nav-link  d-flex justify-content-around " href="" id="navbarDropdown"
          role="button" aria-expanded="false">
          <img class="" src="./assets/icon/person.svg">
          <img class="" src="./assets/icon/Path.svg" style="width:14px;">

        </a>
        <ul class="dropdown-menu  text-end" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#">ورود</a>
          </li>
          <li>
            <a class="dropdown-item" href="./login.html">ثبت نام </a>
          </li>
 <li>
            <a class="dropdown-item" href="./profile.html">پروفایل</a>
          </li>
        </ul>
      </li>

    </div>
  </div>
<!-- End nav1 -->







<!-- Start mega menu -->
<!-- Navbar -->
<nav class=" navbar-expand-lg  d-flex flex-row text-end shop-navigation py-0 ">
    <!-- start mobile-story
 -->
    <div class="mobile-story h-100 w-100 d-none  text-center">
      <div class="d-flex h-100 w-100 justify-content-between  ">
        <div class="mobile-story1 mt-1">
          <a href="">
            <img class="story-img" src="./assets/img/home-img/d.png" alt="">
            <p> شگفت انگیزها</p>
          </a>
        </div>
        <div class="mobile-story2 mt-1">
          <a href="">
            <img class="story-img" src="./assets/img/home-img/c.png" alt="">
            <p> ترندترین</p>
          </a>
        </div>
        <div class="mobile-story3 mt-1">
          <a href="">

            <img class="story-img" src="./assets/img/home-img/b.png" alt="">
            <p> پرفروش ترین</p>
          </a>

        </div>
        <div class="mobile-story4 mt-1">
          <a href="">

            <img class="story-img" src="./assets/img/home-img/a.png" alt="">
            <p>محبوب ترین </p>
          </a>

        </div>
        <div class="mobile-story4 mt-1">
          <a href="">

            <img class="story-img" src="./assets/img/home-img/e.png" alt="" >
            <p> سوالات شما </p>
          </a>

        </div>
      </div>
    </div>



    <!-- end mobile-story -->

    <div class="container-fluid h-100 my-0 py-0">
        <div class="collapse   navbar-collapse h-100 d-flex " id="navbarNav">
            <ul class="navbar-nav h-100 d-flex align-items-center ">


                <li
                    class="nav-item dropdown  position-static h-100 d-flex align-items-center hovernew  text-end">

                    <a data-mdb-dropdown-init class="nav-link pl-12 h-50 ps-3 ms-2  " href="#" id="navbarDropdown"
                        role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        دسته‌بندی‌کالاها
                        <i style="width:24px" class="fas fa-bars  "></i>

                    </a>
                    <!-- Dropdown menu -->
                    <div id="dropdown-menu-mobile" class="dropdown-menu w-100 mt-0 shadow-none"
                        aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                            border-top-right-radius: 0; ">

                        <div class="container ">
                            <div class="row my-4 flex-row pt-0 mt-0 ">
                                <div class="col-md-4 col-lg-3 mb-3 mb-lg-0 text-end ">
                                    <div class=" list-group-flush border-new ">
                                        <!-- StartFurniture -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoverFurniture red  ">
                                            <a class="text-black text-end " href="">
                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 18.1963V21.0002" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M19 18.1963V21.0002" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M20 11V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V11"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M16 15H8C6.89543 15 6 14.1046 6 13V13C6 11.8954 5.10457 11 4 11V11C2.89543 11 2 11.8954 2 13V13C2 16.3137 4.68629 19 8 19H16C19.3137 19 22 16.3137 22 13V13C22 11.8954 21.1046 11 20 11V11C18.8954 11 18 11.8954 18 13V13C18 14.1046 17.1046 15 16 15Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                مبلمان

                                            </a>
                                            <!-- <img class="ms-1" src="./assets/icon/mobl.svg"> -->
                                            <div class="Furniture  bg-body  position-absolute pe-5   " style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger "><i
                                                        class="fas fa-angle-left  me-2 align-middle"></i>
                                                    انواع مبلمان
                                                </a>
                                                <ul class="list-unstyled Furniture-details mobile-ul-visible">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2 "><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    مبل</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">مبل
                                                                    راحتی
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    مبل تختخواب شو</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    مبل بادی</a> </li>
                                                        </ul>




                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>تخت
                                                                    خواب
                                                                </a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">تخت
                                                                    نوزاد
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">تخت
                                                                    خواب دونفره
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">سرویس
                                                                    خواب نوزاد
                                                                </a> </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>تعدادنشیمن
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">مبل
                                                                    راحتی 8 نفره</a>
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">مبل
                                                                    کلاسیک 7نفره
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    مبل 5نفره </a> </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>انواع
                                                                    مبل </a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">مبل
                                                                    فرانسوی</a>
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">مبل
                                                                    کلاسیک</a>
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">مبل
                                                                    سلطنتی واستیل</a>
                                                            </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    مبل اداری </a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">صندلی
                                                                    انتظار</a>
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2"></a>میز
                                                                عسلی
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">ست
                                                                    اداری</a>
                                                            </li>
                                                        </ul>

                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End Furniture  -->

                                        <!-- Start  Decoration  -->
                                        <div
                                            class="list-group-item  list-group-item-action my-3 position-relative  hoverDecoration red">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 21L18.0001 14" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M21.5002 14H18.0002C15.6686 10.8114 14.4399 6.94968 14.5002 3"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M7.50007 21L6.5 14" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M3 14H6.49994C8.83153 10.8114 10.0603 6.94968 10 3"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M3 21V5C3 3.89543 3.89543 3 5 3H19.5C20.6046 3 21.5 3.89543 21.5 5V21"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M22.5 21H1.5" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M17 17H7" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                دکوراسیون
                                                داخلی

                                            </a>

                                            <div class="Decoration bg-body position-absolute pe-5   "
                                                style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger "><i
                                                        class="fas fa-angle-left  me-2 align-middle"></i>همه ی
                                                    دکوراسیون داخلی</a>
                                                <ul class="list-unstyled">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2 "><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle "></i>
                                                                    کتابخانه</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">نگهدارنده
                                                                    ی کتاب</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">کتابخانه
                                                                    متحرک</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">کتاب
                                                                    دکوراتیو</a> </li>
                                                        </ul>




                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>شلف
                                                                    و طبقه</a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">باکس
                                                                    و سبد</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">شلف
                                                                    دیواری و جاحوله ای</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">مجسمه
                                                                    دکوراتیو</a> </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>دکوری
                                                                    کنسول</a> </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2">آباژوردکوراتیو</a>
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">انواع
                                                                    آینه</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">شمع
                                                                    و شمعدان</a> </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>انواع
                                                                    میز</a></li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2">میزناهارخوری</a>
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2">میزتلویزیون</a>
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2">میزمطالعه</a>
                                                            </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    دکوری دیواری </a></li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2">آیینه</a>
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2"></a>دیوارکوب
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2">تابلو</a>
                                                            </li>
                                                        </ul>

                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End Decoration  -->







                                        <!-- Start  kitchenwar  -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoverkitchen red ">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 4.16016H3" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M21 4.16016H19" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M4 21H20" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M6 3H18C18.5523 3 19 3.44772 19 4V10C19 11.6569 17.6569 13 16 13H8C6.34315 13 5 11.6569 5 10V4C5 3.44772 5.44772 3 6 3Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M6 18V17" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9 18V16" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 18V17" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M15 18V16" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M18 18V17" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                لوازم آشپزخانه

                                            </a>
                                            <div class="kitchenwar bg-body  position-absolute pe-5   "
                                                style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger "><i
                                                        class="fas fa-angle-left  me-2 align-middle"></i>همه ی
                                                    لوازم آشپزخانه</a>
                                                <ul class="list-unstyled ">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    ظروف پخت وپز</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">سرویس
                                                                    قابلمه
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">زودپز
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">بخارپز
                                                                </a> </li>
                                                        </ul>




                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>لوازم
                                                                    برقی آشپزخانه
                                                                </a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">پلوپز
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">مایکروویو
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">همزن
                                                                    و مخلوط کن
                                                                </a> </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>سازمان
                                                                    دهی آشپزخانه
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">نظم
                                                                    دهنده ی کابینت</a>
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">شلف
                                                                    و کشو
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">جاقاشقی
                                                                </a> </li>
                                                        </ul>

                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    ظروف پذیرایی</a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">بشقاب
                                                                    و لیوان</a>
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2"></a>سرویس
                                                                چایخوری
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">سرویس
                                                                    چینی</a>
                                                            </li>
                                                        </ul>

                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End Kitchenware -->




                                        <!-- <img class="ms-1" src="./assets/icon/Bath, Bathroom.svg"> -->
                                        <!-- Start  bathroom  -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoverbathroom  red ">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M14.5268 9.12012H11.4738C10.7908 9.12012 10.3088 8.45112 10.5248 7.80412V7.80412C10.8598 6.79812 11.8008 6.12012 12.8608 6.12012H13.1388C14.1988 6.12012 15.1398 6.79812 15.4748 7.80412V7.80412C15.6908 8.45112 15.2088 9.12012 14.5268 9.12012V9.12012Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M6.99326 13.2627H4.00026C3.38626 13.2627 2.91726 13.8107 3.01226 14.4167L3.35626 16.6167C3.66026 18.5647 5.33726 19.9997 7.30826 19.9997H16.6923C18.6633 19.9997 20.3403 18.5647 20.6443 16.6177L20.9883 14.4177C21.0833 13.8117 20.6143 13.2637 20.0003 13.2637H12.2633"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M13 6.12V6C13 4.343 14.343 3 16 3V3C17.657 3 19 4.343 19 6V13.263"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M10.158 17.263H9.105C7.943 17.263 7 16.321 7 15.158V13.153C7 12.516 7.516 12 8.153 12H11.11C11.747 12 12.263 12.516 12.263 13.153V15.158C12.263 16.321 11.321 17.263 10.158 17.263Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M6.04 19.7998L5 20.9998" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M19 20.9998L17.96 19.7998" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                سرویس خواب و حمام


                                            </a>
                                            <div class="bathroom bg-body  position-absolute pe-5   "
                                                style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger "><i
                                                        class="fas fa-angle-left  me-2 align-middle"></i>همه ی
                                                    لوازم سرویس خواب و حمام</a>
                                                <ul class="list-unstyled ">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    نظم‌دهنده‌ی‌حمام </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    شلف حمام
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">سبد
                                                                    لباس
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">جا
                                                                    حوله‌ای
                                                                </a> </li>
                                                        </ul>




                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>لوازم
                                                                    حمام
                                                                </a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">پرده
                                                                    حمام
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">پادری‌حمام
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">ست
                                                                    لوازم حمام

                                                                </a> </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>سرویس
                                                                    خواب

                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">روتختی
                                                                </a>
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">بالشت
                                                                    و تشک
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">پتو
                                                                    و روانداز
                                                                </a> </li>
                                                        </ul>

                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    ملزومات اتاق خواب</a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">پاتختی
                                                                </a>
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2"></a>
                                                                آینه اتاق خواب </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">رخت‌آویز
                                                                    و جالباسی
                                                                </a>
                                                            </li>
                                                        </ul>

                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End bathroom -->
                                        <!-- Start  light  -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoverlight  red ">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 21V10" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M16 7L15.2279 9.31623C15.0918 9.72457 14.7097 10 14.2792 10H9.72076C9.29033 10 8.90819 9.72457 8.77208 9.31623L8 7"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M7 21H17" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M10.5 14H13.5" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M10.5 17H13.5" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <rect x="5.5" y="3" width="13" height="4" rx="2"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                                نورپردازی و روشنایی

                                            </a>
                                            <div class="light bg-body bg-body  position-absolute pe-5   " style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger "><i
                                                        class="fas fa-angle-left  me-2 align-middle"></i>همه‌ی
                                                    لوازم‌نورپردازی و روشنایی</a>
                                                <ul class="list-unstyled ">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    نورپردازی دکوراتیو </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    ریسه نوری
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    چراغ دکوراتیو
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    شمع‌وجاشمعی
                                                                </a> </li>
                                                        </ul>




                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    چراغ‌های‌سقفی
                                                                </a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    لوستر
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    چراغ آویز
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">ست
                                                                    چراغ سقفی

                                                                </a> </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    چراغ‌های رومیزی و ایستاده

                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">آباژور
                                                                    رومیزی
                                                                </a>
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">آباژور
                                                                    ایستاده

                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    چراغ مطالعه
                                                                </a> </li>
                                                        </ul>

                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    روشنایی کاربردی</a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">چراغ
                                                                    زیر کابینتی
                                                                </a>
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2"></a>
                                                                لامپ</li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    چراغ دیواری
                                                                </a>
                                                            </li>
                                                        </ul>

                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End bathroom -->
                                        <!-- Start home-organization -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoverorganization  red ">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M21 16.0407V7.95872C21 7.24372 20.619 6.58372 20 6.22672L13 2.18572C12.381 1.82872 11.619 1.82872 11 2.18572L4 6.22572C3.381 6.58372 3 7.24372 3 7.95872V16.0417C3 16.7567 3.381 17.4167 4 17.7737L11 21.8147C11.619 22.1717 12.381 22.1717 13 21.8147L20 17.7737C20.619 17.4157 21 16.7557 21 16.0407Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M12 22.08V12" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 12L20.73 6.95996" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M3.26953 6.95996L11.9995 12" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                لوازم سازماندهی

                                            </a>
                                            <div class="home-organization  bg-body  position-absolute pe-5   "
                                                style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger "><i
                                                        class="fas fa-angle-left  me-2 align-middle"></i>همه‌ی‌لوازم‌
                                                    سازمانده</a>
                                                <ul class="list-unstyled ">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    نظم‌دهنده ورودی خانه</a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    جاکفشی
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    جالباسی
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    جا کلیدی
                                                                </a> </li>
                                                        </ul>




                                                    </li>
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    چراغ‌های‌سقفی
                                                                </a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    لوستر
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    چراغ آویز
                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">ست
                                                                    چراغ سقفی

                                                                </a> </li>
                                                        </ul>

                                                    </li>
                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    نظم‌دهنده میز و کشو

                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    استند رومیزی
                                                                </a>
                                                            </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    نظم‌دهنده کشو

                                                                </a> </li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    جاقلمی و لوازم رومیزی
                                                                </a> </li>
                                                        </ul>

                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2"><i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    نظم‌دهنده منزل</a></li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">سبد
                                                                    و باکس

                                                                </a>
                                                            </li>
                                                            <li> <a
                                                                    class="list-group-item list-group-item-action my-2"></a>
                                                                جعبه نگهداری</li>
                                                            <li> <a class="list-group-item list-group-item-action my-2">
                                                                    فایل و نظم‌دهنده
                                                                </a>
                                                            </li>
                                                        </ul>

                                                    </li>
                                                </ul>

                                            </div>
                                        </div>




                                        <!-- End home-organization -->
                                        <!-- Start  home-tools  -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoverhome-tools  red ">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.74002 11.26L2.80002 8.32002C2.39999 7.91945 2.39999 7.27058 2.80002 6.87002L5.87002 3.80002C6.27058 3.39999 6.91945 3.39999 7.32002 3.80002L9.26002 5.74002"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M18.2602 14.7402L20.2002 16.6802C20.6003 17.0808 20.6003 17.7297 20.2002 18.1302L17.1302 21.2002C16.7297 21.6003 16.0808 21.6003 15.6802 21.2002L12.7402 18.2602"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M11.7663 9.10254L4.14848 16.7203C3.588 17.2795 3.36871 18.0954 3.57333 18.8602C3.77795 19.6251 4.37534 20.2225 5.14017 20.4271C5.905 20.6317 6.72088 20.4124 7.28007 19.8519L14.8979 12.2341"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M11.7659 9.10234C11.3329 7.83387 11.4298 6.44439 12.0345 5.24824C12.6393 4.05209 13.7008 3.15036 14.9791 2.74705C15.6202 2.53392 16.2989 2.45797 16.9713 2.52415C17.3489 2.57458 17.6649 2.83569 17.7856 3.19709C17.9063 3.55848 17.8107 3.95707 17.5391 4.22435L15.7349 6.02849C15.6411 6.12224 15.5884 6.24942 15.5884 6.38203C15.5884 6.51465 15.6411 6.64183 15.7349 6.73558L17.2642 8.26494C17.4595 8.46019 17.7761 8.46019 17.9714 8.26494L19.7755 6.4608C20.0427 6.18924 20.4413 6.09359 20.8027 6.21428C21.1641 6.33498 21.4252 6.65095 21.4756 7.02861C21.5419 7.70096 21.4659 8.37972 21.2527 9.0208C20.8495 10.299 19.9478 11.3606 18.7516 11.9654C17.5555 12.5701 16.166 12.6669 14.8976 12.2339"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                ابزار و تجهیزات خانه



                                            </a>
                                            <div class="home-tools bg-body  position-absolute pe-5   "
                                                style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger ">
                                                    <i class="fas fa-angle-left  me-2 align-middle"></i>
                                                    همه‌ی لوازم مربوط به ابزار و تجهیزات خانه
                                                </a>
                                                <ul class="list-unstyled ">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    ابزار دستی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    پیچ‌گوشتی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    چکش
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    انبردست
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    تجهیزات تعمیرات
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    دریل
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    متر و ابزار اندازه‌گیری
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    جعبه‌ابزار
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    تجهیزات نظافت
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    جارو و خاک‌انداز
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تی و زمین‌شوی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    سطل و لوازم نظافت
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    لوازم کاربردی خانه
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    نردبان
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    رخت‌آویز
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    چوب‌لباسی
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End home-tools -->

                                        <!-- outdoor-garden  light  -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoveroutdoor-garden  red ">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M3 16H13C13.5523 16 14 16.4477 14 17V19H2V17C2 16.4477 2.44772 16 3 16Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M14 21V19" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2 21V19" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M4 12H12C12.5523 12 13 12.4477 13 13V16H3V13C3 12.4477 3.44772 12 4 12Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M17 19H21" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <ellipse cx="19" cy="8.5" rx="4" ry="5.5" stroke="currentColor"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M19 9V19" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M8.43506 3.5188C9.35978 3.61493 10.0468 4.41905 9.99748 5.34744C9.94813 6.27583 9.1797 7.00257 8.25 7.00012H4.5C3.67157 7.00012 3 6.32855 3 5.50012C3 4.6717 3.67157 4.00012 4.5 4.00012C4.49826 2.9899 5.25139 2.13757 6.25414 2.01491C7.2569 1.89226 8.19325 2.53794 8.43506 3.5188Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                                فضای باز و باغچه


                                            </a>
                                            <div class="outdoor-garden bg-body   position-absolute pe-5   "
                                                style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger ">
                                                    <i class="fas fa-angle-left  me-2 align-middle"></i>
                                                    همه‌ی لوازم مربوط به فضای باز و باغچه
                                                </a>
                                                <ul class="list-unstyled ">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    مبلمان فضای باز
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    میز و صندلی باغی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    صندلی تاشو
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    نیمکت فضای باز
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    لوازم باغبانی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    بیل و بیلچه
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    قیچی باغبانی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    آب‌پاش و شلنگ
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    دکوراسیون فضای باز
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    گلدان فضای باز
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    مجسمه باغی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    چراغ باغی
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    تجهیزات فضای باز
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    سایبان و چتر
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    باربیکیو
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    باکس نگهداری فضای باز
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End outdoor-garden -->
                                        <!-- Start  services  -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoverservices  red ">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 16.5H21" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M22 21H2" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 21V16.5" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M16 16.5V12" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8 16.5V12" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M3 7.5H21" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M16 7.5V3" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M3 12H21" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 12V7.5" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8 7.5V3" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M3 21V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V21"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                خدمات


                                            </a>
                                            <div class="services bg-body   position-absolute pe-5   "
                                                style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger ">
                                                    <i class="fas fa-angle-left  me-2 align-middle"></i>
                                                    خدمات
                                                </a>
                                                <ul class="list-unstyled ">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    خدمات نصب
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    نصب مبلمان
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    نصب لوازم آشپزخانه
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    نصب تجهیزات روشنایی
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    خدمات تعمیر
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تعمیر لوازم خانگی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تعمیر مبلمان
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تعمیر تجهیزات آشپزخانه
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    خدمات دکوراسیون
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    مشاوره دکوراسیون
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    طراحی فضای داخلی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    چیدمان منزل
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    خدمات ارسال و جابه‌جایی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    ارسال کالا
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    حمل و جابه‌جایی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    نصب و تحویل کالا
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End services -->
                                        <!-- Start  featured-products  -->
                                        <div
                                            class="list-group-item list-group-item-action my-3 position-relative  hoverfeatured-products  red ">
                                            <a class="text-black" href="">


                                                <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.31315 7.75912C8.46506 7.91103 8.46506 8.15733 8.31315 8.30924C8.16124 8.46116 7.91494 8.46116 7.76302 8.30924C7.61111 8.15733 7.61111 7.91103 7.76302 7.75912C7.91494 7.6072 8.16124 7.6072 8.31315 7.75912"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M7.244 3.02509L10.093 3.00009C10.624 2.99509 11.135 3.20509 11.511 3.58009L20.415 12.4881C21.196 13.2691 21.196 14.5361 20.415 15.3171L15.321 20.4141C14.54 21.1961 13.272 21.1961 12.491 20.4141L3.58 11.5001C3.209 11.1291 3 10.6251 3 10.0991V7.28709C3 6.76109 3.209 6.25709 3.58 5.88609L5.86 3.60509C6.228 3.23709 6.725 3.02909 7.244 3.02509Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                محصولات ویژه



                                            </a>
                                            <div class="featured-products bg-body    position-absolute pe-5   "
                                                style="width:800px;">
                                                <a class="list-group-item list-group-item-action my-3 text-danger ">
                                                    <i class="fas fa-angle-left  me-2 align-middle"></i>
                                                    محصولات ویژه
                                                </a>
                                                <ul class="list-unstyled ">
                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    پرفروش‌ها
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    پرفروش‌ترین مبلمان
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    پرفروش‌ترین لوازم آشپزخانه
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    پرفروش‌ترین لوازم دکوراتیو
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body  me-2 align-middle"></i>
                                                                    محصولات جدید
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تازه‌های مبلمان
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تازه‌های آشپزخانه
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تازه‌های دکوراسیون
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    تخفیف‌ها
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تخفیف مبلمان
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تخفیف لوازم خانه
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    تخفیف لوازم آشپزخانه
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="d-inline-block w-25 ">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <a
                                                                    class="list-group-item list-group-item-action my-3 pe-2">
                                                                    <i
                                                                        class="fas fa-angle-left text-body   me-2 align-middle"></i>
                                                                    پیشنهادهای ویژه
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    پیشنهاد روز
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    پیشنهادهای اقتصادی
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a class="list-group-item list-group-item-action my-2">
                                                                    محصولات منتخب
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <!-- End featured-products -->

























































                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>


                <li class="nav-item d-flex align-items-center">
                    <a class="nav-link p-3" href="#">شگفت انگیزها
                        <img src="./assets/icon/stars-light-sparkle-1.svg">
                    </a>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <a class="nav-link p-3" href="#">ترندترین
                        <img src="./assets/icon/Medal, Prize, Reward.svg">
                    </a>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <a class="nav-link p-3" href="#">پرفروش‌ترین


                        <img src="./assets/icon/cup-2.svg">
                    </a>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <a class="nav-link  h-auto ps-3 ms-2" href="#">محبوب‌ترین

                        <img class="" src="./assets/icon/Heart.svg">
                    </a>
                </li>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <a class="nav-link p-3" href="#"> سوالات شما</a>
                </li>

            </ul>
        </div>
    </div>
</nav>

</div>




<!-- End mega menu -->
<!-- start mobilemenu -->
<div class="mobile-menu  d-none">
    <div class="d-flex justify-content-around flex-row ">
        <div class="mobile-home">
            <a id="mobile-home" href="">
                <i class="fas fa-house"></i>
                خانه

            </a>


        </div>
        <div class="mobile-product">
            <div id="mobile-product">
                <button class="border-0 bg-body" type="button"
                    onclick="mdb.Offcanvas.getOrCreateInstance(document.querySelector('#offcanvasBottom')).show()">
                    <i class="fas fa-layer-group"></i>
                    دسته بندی کالاها
                </button>


            </div>
        </div>
        <div class="mobile-bascet">
            <a id="mobile-bascet" href="">

                <i class="fas fa-cart-shopping"></i>
                سبدخرید

            </a>

        </div>
        <div class="mobile-login">
            <a id="mobile-login" href="">

                <i class="fas fa-user"></i>
                حساب کاربری


            </a>
        </div>
    </div>
</div>

<!-- end mobilemenu -->

<!-- start listmenu mobile -->

<div class="offcanvas offcanvas-bottom " tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
    <div class="offcanvas-header d-flex justify-content-between align-items-center w-100">
        <h6 class="offcanvas-title" id="offcanvasBottomLabel">
            بازگشت به صفحه اصلی
        </h6>
        <button type="button" class="btn-close  mx-0 text-reset"
            onclick="mdb.Offcanvas.getOrCreateInstance(document.querySelector('#offcanvasBottom')).hide()"
            aria-label="Close">
        </button>
    </div>
    <div class="offcanvas-body small d-flex flex-row ">
        <div
            class="mobile-categories col-4 border rounded-1 px-3 py-2 h-100 d-flex flex-column justify-content-between">
            <div class="mobile-category mobile-furniture"><a class="text-black" href="">
                    <svg class="svg" width="24" height="24">
                        <use href="#icon-furniture"></use>
                    </svg>
                    مبلمان</a></div>
            <div class="mobile-category mobile-decoration"><a class="text-black" href=""> <svg class="svg" width="24"
                        height="24">
                        <use href="#icon-decor"></use>
                    </svg>دکوراسیون داخلی</a></div>
            <div class="mobile-category mobile-kitchen"><a class="text-black" href=""> <svg class="svg" width="24"
                        height="24">
                        <use href="#icon-kitchen"></use>
                    </svg>لوازم آشپزخانه</a></div>
            <div class="mobile-category mobile-bedroom"><a class="text-black" href="">

                    <svg class="svg" width="24" height="24">
                        <use href="#icon-bathroom"></use>
                    </svg>سرویس خواب و حمام</a></div>
            <div class="mobile-category mobile-lighting"><a class="text-black" href=""><svg class="svg" width="24"
                        height="24">
                        <use href="#icon-lighting"></use>
                    </svg>نورپردازی و روشنایی</a></div>
            <div class="mobile-category mobile-organization"><a class="text-black" href=""> <svg class="svg" width="24"
                        height="24">
                        <use href="#icon-organizer"></use>
                    </svg>لوازم سازماندهی</a></div>
            <div class="mobile-category mobile-tools"><a class="text-black" href=""> <svg class="svg" width="24"
                        height="24">
                        <use href="#icon-tools"></use>
                    </svg>
                    ابزار و تجهیزات خانه</a></div>
            <div class="mobile-category mobile-outdoor"><a class="text-black" href f=""> <svg class="svg" width="24"
                        height="24">
                        <use href="#icon-services"></use>
                    </svg>خدمات</a></div>
            <div class="mobile-category mobile-special"><a class="text-black" href=""><svg class="svg" width="24"
                        height="24">
                        <use href="#icon-featured"></use>
                    </svg>محصولات ویژه</a></div>
        </div>
        <div class="col-7 ">
            <div class="mobile-furniture-submenu">

                <div class="furniture-submenu-title ">
                    <a class="text-black px-4 py-3" href="">انواع مبلمان<i
                            class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></a>
                </div>
                <div class="accordion mt-3" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button data-mdb-collapse-init class="accordion-button text-black" type="button"
                                data-mdb-toggle="collapse" data-mdb-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne">
                                مبل </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body d-flex flex-column">
                                <div class="my-1">مبل راحتی <i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></div>
                                <div class="my-1">مبل تخت خواب شو<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i>
                                </div>
                                <div class="my-1">مبل بادی<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></div>


                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button data-mdb-collapse-init class="accordion-button collapsed text-black" type="button"
                                data-mdb-toggle="collapse" data-mdb-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                تخت خواب </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="my-1">تخت نوزاد<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></div>
                                <div class="my-1">تخت خواب دونفره<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i>
                                </div>
                                <div class="my-1">سرویس خواب نوزاد<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button data-mdb-collapse-init class="accordion-button collapsed text-black" type="button"
                                data-mdb-toggle="collapse" data-mdb-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                تعدادنشیمن </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="my-1">مبل راحتی 8نفره<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i>
                                </div>
                                <div class="my-1">مبل کلاسیک 7نفره<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i>
                                </div>
                                <div class="my-1">مبل 5نفره<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button data-mdb-collapse-init class="accordion-button text-black" type="button"
                                data-mdb-toggle="collapse" data-mdb-target="#collapseFour" aria-expanded="true"
                                aria-controls="collapseFour">
                                انواع مبل </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="my-1 ">مبل فرانسوی<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></div>
                                <div class="my-1">مبل کلاسیک <i class="fas fa-chevron-left me-4 fa-2xs"></i></div>
                                <div class="my-1">مبل سلطنتی و استیل<i class="fas fa-chevron-left me-4 fa-2xs"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                            <button data-mdb-collapse-init class="accordion-button collapsed text-black" type="button"
                                data-mdb-toggle="collapse" data-mdb-target="#collapseFive" aria-expanded="false"
                                aria-controls="collapseFive">
                                مبل اداری </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="my-1">صندلی <i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></div>
                                <div class="my-1">میزعسلی<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></div>
                                <div class="my-1">ست اداری<i class="fas fa-chevron-left pt-3 me-4 fa-2xs"></i></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</div>
</header>`;

// دستی init کردن کامپوننت‌های MDB که داخل هدر تزریق شدن
document.querySelectorAll('[data-mdb-offcanvas-init]').forEach(el => {
    mdb.Offcanvas.getOrCreateInstance(el);
});

document.querySelectorAll('[data-mdb-collapse-init]').forEach(el => {
    mdb.Collapse.getOrCreateInstance(el);
});