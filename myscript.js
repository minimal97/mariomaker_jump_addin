//===========================================================
//
//      プラグイン v1
//
    var test;
    var i;
    var search;
    var search_p =/([A-F０-９Ａ-Ｆ0-9]{4})[-－ 　]([A-F０-９Ａ-Ｆ0-9]{4})[-－ 　]([A-F０-９Ａ-Ｆ0-9]{4})[-－ 　]([A-F０-９Ａ-Ｆ0-9]{4})/ ;
    var clas;
    var cnvcd;

    // 名前に ブックマークリンクを付ける
    clas = document.getElementsByClassName('user-id');
    for (i = 0 ; ( i < clas.length) | (clas==undefined) ; i++){
        test = clas[i].innerHTML;
        if (test === void 0){
            // none
        }else{
        test = "<a href=\"https://supermariomakerbookmark.nintendo.net/profile/"+test+ "\" target=\"_blank\">"+ test + "<img src=\"https://d3esbfg30x759i.cloudfront.net/tip/AAUAABAY2wAL2K1mrL\" width=\"24\"><\/a>";
            clas[i].innerHTML = test;
        }
    }

    // 名前に ブックマークリンクを付ける
    clas = document.getElementsByClassName('id-name');
    for (i = 0 ; ( i < clas.length) | (clas==undefined) ; i++){
        test = clas[i].innerHTML;
        if (test === void 0){
            // none
        }else{
        test = "<a href=\"https://supermariomakerbookmark.nintendo.net/profile/"+test+ "\" target=\"_blank\">"+ test + "<img src=\"https://d3esbfg30x759i.cloudfront.net/tip/AAUAABAY2wAL2K1mrL\" width=\"24\"><\/a>";
            clas[i].innerHTML = test;
        }
    }

    // トピック100までなので120で固定
    clas = document.getElementsByClassName('body');
    for (i = 0 ; i < clas.length ; i++){
        test = clas[i].innerHTML;
        if (test === void 0){
            // none
        }else{

            // すべてのコードを検索
            while(1){

                // コードを正規表現で見つける
                search = test.match(search_p);
                if (search != undefined ) {

                    // 全角を探す
                    if ( search[0].match(/[０-９Ａ-Ｆ]/) ) {

                        cnvcd = "";
                        for (chiplp = 0 ; chiplp < search[0].length ; chiplp++ ){

                            // ここで全角をつぶす
                            if( search[0].charCodeAt(chiplp) > 0xFEE0 ){

                                cnvcd = cnvcd + String.fromCharCode(search[0].charCodeAt(chiplp) - 0xFEE0);
                            }else{

                                cnvcd = cnvcd + search[0].charAt(chiplp);
                            }
                        }
                    }else{

                        cnvcd = search[0];
                    }
                    cnvcd = cnvcd.replace(/[-－ ]/g , "_");
                    test = test.replace(search[0], cnvcd);
                }else{

                    break;
                }
                //break;
            }
            test = test.replace(/([A-F0-9]{4})[_-－ ]([A-F0-9]{4})[_-－ ]([A-F0-9]{4})[_-－ ]([A-F0-9]{4})/g, "<a href=\"https://supermariomakerbookmark.nintendo.net/courses/$1-$2-$3-$4\" target=\"_blank\">$1-$2-$3-$4</a>");
            clas[i].innerHTML = test;
        }
    }
