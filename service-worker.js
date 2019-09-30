/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6e7c04a6cc6e729a07a5125a1d0a3862"
  },
  {
    "url": "about/index.html",
    "revision": "e35bec6aa5898ca440ae3becc4bcf9e9"
  },
  {
    "url": "about/LOGs.html",
    "revision": "fbe3d70a87320baca16e0f2ea57c0bc0"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.316da7c1.css",
    "revision": "79df9fb7b905daec151d7a11a00a0fb3"
  },
  {
    "url": "assets/img/CustomerOrdersView.6311d5d4.png",
    "revision": "6311d5d419093fd2e1ad7a6b03b308ec"
  },
  {
    "url": "assets/img/ESP-1-ERD-CustomerOrdersView.40628f59.png",
    "revision": "40628f5970c156e3e1c3614ab8353341"
  },
  {
    "url": "assets/img/ESP-2-ERD-PaymentLogView.3f72a51c.png",
    "revision": "3f72a51c875f924d916787c0d69da45d"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-A.60658a0d.png",
    "revision": "60658a0da24855d4a15c767972abbfd8"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-B.38eedb63.png",
    "revision": "38eedb63265a820934ebdcb645f0917d"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-C.57734797.png",
    "revision": "5773479785995bda45c142c6574be0dd"
  },
  {
    "url": "assets/img/ESP-3-ERD-Inventory-Control-View.035f952a.png",
    "revision": "035f952a5c1510c52cfb8063aead6eb2"
  },
  {
    "url": "assets/img/ESP-3-ERD-Purchase-Orders-View.a538692a.png",
    "revision": "a538692a19b1db735c47c22623362e88"
  },
  {
    "url": "assets/img/ESP-3-Inventory-Control-View.a6309142.png",
    "revision": "a63091421adb8b779bd31748de46d211"
  },
  {
    "url": "assets/img/ESP-3-Purchase-Orders-View.56b0efed.png",
    "revision": "56b0efed3a25ca6688515447086bd0a6"
  },
  {
    "url": "assets/img/ESP-4-Cheque-Register-View.b55c141a.png",
    "revision": "b55c141a089c58ca93c4ee1a1a1692f7"
  },
  {
    "url": "assets/img/ESP-4-ERD-Cheque-Register-View.5dce58fc.png",
    "revision": "5dce58fcc57eec752e7059eeda0e4f34"
  },
  {
    "url": "assets/img/ESP-5-ERD-OrderShipment.48f96eda.png",
    "revision": "48f96eda9d4d9e8ad8d95908d38f3e99"
  },
  {
    "url": "assets/img/ESP-5-Order-Shipment-View.6bb435b4.png",
    "revision": "6bb435b4c8168c378bfa599ef80c4632"
  },
  {
    "url": "assets/img/ESP-6-Driver-Details-View.90181f44.png",
    "revision": "90181f44628c808d5658b50eb0fb4a28"
  },
  {
    "url": "assets/img/ESP-6-ERD-Driver-Details-View.a66d7cc0.png",
    "revision": "a66d7cc0c42d116e7e722cb9aa6d4f1a"
  },
  {
    "url": "assets/img/ESP-Merge-With-ESP-3.ffca8ca0.png",
    "revision": "ffca8ca0cc7040a1163e04196c3f3526"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-1.685f2816.png",
    "revision": "685f281667153030ac47c5dd53a03c98"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-2.beecb18b.png",
    "revision": "beecb18b0dd7a0f1f9eedd4e3653d2a5"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-3.9d5b39aa.png",
    "revision": "9d5b39aa64ba764c17acd05a3dd42aaf"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-4.b375e458.png",
    "revision": "b375e458737fa6b3af034b87361af987"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical.8a64b161.png",
    "revision": "8a64b161121f1b02d0bd8d5a7bd8f3f4"
  },
  {
    "url": "assets/img/ESP-Physical-ERD.8a64b161.png",
    "revision": "8a64b161121f1b02d0bd8d5a7bd8f3f4"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-1.685f2816.png",
    "revision": "685f281667153030ac47c5dd53a03c98"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-2.beecb18b.png",
    "revision": "beecb18b0dd7a0f1f9eedd4e3653d2a5"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-3.9d5b39aa.png",
    "revision": "9d5b39aa64ba764c17acd05a3dd42aaf"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-4.b375e458.png",
    "revision": "b375e458737fa6b3af034b87361af987"
  },
  {
    "url": "assets/img/ESP.fb67f7da.png",
    "revision": "fb67f7da9ac37ca9287672e0a2bd610e"
  },
  {
    "url": "assets/img/IQSchool-ERD.9589c95f.png",
    "revision": "9589c95f711c7726c88b9d1d1cb5c52c"
  },
  {
    "url": "assets/img/IQSchool-ERD.f2f3ede0.png",
    "revision": "f2f3ede04ac83e7ec400ffd56e59f45d"
  },
  {
    "url": "assets/img/Logical-ERD.2053813d.svg",
    "revision": "2053813d8e67dea7ae14019be06aa316"
  },
  {
    "url": "assets/img/Merge-ESP-1and2.cd8ae504.png",
    "revision": "cd8ae50456d45d43430845bcf14ec328"
  },
  {
    "url": "assets/img/SampleForm.9387c4d4.png",
    "revision": "9387c4d460c5493156564791ecaeeb7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/view1.fa1dab5e.png",
    "revision": "fa1dab5eccde499b8ff8a02d5d4cf701"
  },
  {
    "url": "assets/img/view2.440b8485.png",
    "revision": "440b8485c7ea8e4368dc90a0e4834408"
  },
  {
    "url": "assets/js/1.0aec5bb1.js",
    "revision": "534c6f7581dac89b9e1f00c00bed6c44"
  },
  {
    "url": "assets/js/10.8f641943.js",
    "revision": "def5e005622c40cb9a42f8c815d0ea8f"
  },
  {
    "url": "assets/js/11.36ec67f9.js",
    "revision": "ff98344f2ef719317d487e631efa45e5"
  },
  {
    "url": "assets/js/12.3082c272.js",
    "revision": "f6a122c0aef61da3fb28b4b422812300"
  },
  {
    "url": "assets/js/13.531919c9.js",
    "revision": "cbd1291d860b257c235aed8ab20e1ced"
  },
  {
    "url": "assets/js/14.71a0f578.js",
    "revision": "9ec6510ea41c6ae2de97ff85d5c8ed0a"
  },
  {
    "url": "assets/js/15.3847c8ff.js",
    "revision": "edda6e1c268d214e4d701db949616fdc"
  },
  {
    "url": "assets/js/16.4666c63d.js",
    "revision": "27f941d4d052a1d8d24679a90bcd5d06"
  },
  {
    "url": "assets/js/17.042e8f0b.js",
    "revision": "ae03c8ac5b537045be5f4ebe1efdc0f8"
  },
  {
    "url": "assets/js/18.41f02954.js",
    "revision": "01dbfd30d0a88e50648e077fef0b2f58"
  },
  {
    "url": "assets/js/19.0d3bc6b2.js",
    "revision": "7a4bc88d894c7bc5e3507e35d32177d0"
  },
  {
    "url": "assets/js/2.8d7a3014.js",
    "revision": "cb6254300e5c1c361d1c3d7906474b08"
  },
  {
    "url": "assets/js/20.f5cf05ca.js",
    "revision": "cbd7930a69fa60e10eac070195c3101f"
  },
  {
    "url": "assets/js/21.2a30f5b9.js",
    "revision": "713ba53fda4de6dd21ba9544550cad61"
  },
  {
    "url": "assets/js/22.9dcd8f2e.js",
    "revision": "9f113bdede5b91a808a9bd705f237d96"
  },
  {
    "url": "assets/js/23.46b6d381.js",
    "revision": "236a526b7fdbeea2444513e7ea4f1b95"
  },
  {
    "url": "assets/js/24.f5eb3390.js",
    "revision": "a014c507aaf847e5fc74872b222c572a"
  },
  {
    "url": "assets/js/25.c16c34a9.js",
    "revision": "571cf586db9c8ec591b852ecd58d9089"
  },
  {
    "url": "assets/js/26.47e6ca59.js",
    "revision": "3425c73b2c5c6c4767e5aef5c6bc336c"
  },
  {
    "url": "assets/js/27.4a0f12b4.js",
    "revision": "79a6702ca51cd28faccc5eb6ace81e76"
  },
  {
    "url": "assets/js/28.656de5ea.js",
    "revision": "f73f6e27aebda96b87004853efe0bcbf"
  },
  {
    "url": "assets/js/29.2599fb64.js",
    "revision": "415c4827a31ce09ddd4b229f9aed1b47"
  },
  {
    "url": "assets/js/3.d7c4139f.js",
    "revision": "26b44a52b971a536deed5131eaa91aad"
  },
  {
    "url": "assets/js/30.2271e92e.js",
    "revision": "0fd32466127d55cf34dea0ab6dbc8dfa"
  },
  {
    "url": "assets/js/31.75848e25.js",
    "revision": "af1d9618e3fb65f3fb270daef6791bda"
  },
  {
    "url": "assets/js/32.6d6d7270.js",
    "revision": "7f7354cb24d9a80d12e5bfdbc0555196"
  },
  {
    "url": "assets/js/33.27143924.js",
    "revision": "072516643b1e35f5a64f452b217a8eff"
  },
  {
    "url": "assets/js/34.82bcd865.js",
    "revision": "7fa96f57be24244e7e8076ddce077d25"
  },
  {
    "url": "assets/js/35.dc964fc4.js",
    "revision": "a317f7a703c9a1be3faad0b99e8f1a7f"
  },
  {
    "url": "assets/js/36.eda85b38.js",
    "revision": "d1c2b86a7840e7c3399c0850e723fbd9"
  },
  {
    "url": "assets/js/37.6ade0097.js",
    "revision": "adca1b963bc97beb2e8dede05147671b"
  },
  {
    "url": "assets/js/38.a57e5972.js",
    "revision": "dc66c729d6e5fb6610471794ff161f79"
  },
  {
    "url": "assets/js/39.5cadc774.js",
    "revision": "d239485442d1bff7f5dc6e57eb315bd6"
  },
  {
    "url": "assets/js/4.34f9d3ab.js",
    "revision": "0220625ffa43c8fd0b4539d6ff8553b6"
  },
  {
    "url": "assets/js/40.40a4689e.js",
    "revision": "0b531dc9c7d8b0a118b5d9a1981006f8"
  },
  {
    "url": "assets/js/41.7d437783.js",
    "revision": "61b627c2e7964e64fa8aebd649b70b2d"
  },
  {
    "url": "assets/js/42.ec007e06.js",
    "revision": "b17234c1500cad6f7fb580c44d451f9c"
  },
  {
    "url": "assets/js/43.cf5e491b.js",
    "revision": "b3a2bf381d6c7623bec9b969b9bb38f9"
  },
  {
    "url": "assets/js/44.df092bae.js",
    "revision": "dbf78250d40df79078581ede29c2be73"
  },
  {
    "url": "assets/js/45.70d7eb32.js",
    "revision": "62542240580971acd515ab82e8e782ca"
  },
  {
    "url": "assets/js/46.6f162e60.js",
    "revision": "c9a1d34379ae697044f50ec9dc113ca6"
  },
  {
    "url": "assets/js/47.d6f5a9c3.js",
    "revision": "786481e73e958df4225420c6c0e6d492"
  },
  {
    "url": "assets/js/48.be4a41ae.js",
    "revision": "9abb1a4ac990f81b033103af034adb96"
  },
  {
    "url": "assets/js/49.38c2caaa.js",
    "revision": "ed52b95e5afdcd32f6edac39f0df85f7"
  },
  {
    "url": "assets/js/5.5490b43d.js",
    "revision": "83ff0286b532c1aeeab31cc76e98682d"
  },
  {
    "url": "assets/js/50.1bdea180.js",
    "revision": "a5a7564c48385a5136e76e051148aaa4"
  },
  {
    "url": "assets/js/51.bb7dcaa0.js",
    "revision": "7db8fe85205363a05e8d8efe5ace0e21"
  },
  {
    "url": "assets/js/52.06f9fd8a.js",
    "revision": "ef38d95e77bc85a861423aa7037229b8"
  },
  {
    "url": "assets/js/53.180cbef0.js",
    "revision": "b3161128f5aa6985a591ff4c2788943a"
  },
  {
    "url": "assets/js/54.0685f0e1.js",
    "revision": "fbb12e54cdd7b1a1f22eac6d1a3157cb"
  },
  {
    "url": "assets/js/55.4af33a3c.js",
    "revision": "cbdfd174bd40b2907099e333caa98e38"
  },
  {
    "url": "assets/js/56.ee10eb87.js",
    "revision": "c801dbd2dca0dc9b2785ced03a881e64"
  },
  {
    "url": "assets/js/57.2724bcf6.js",
    "revision": "efe91b993ce9ada32a7ea0accc86423a"
  },
  {
    "url": "assets/js/58.976ff569.js",
    "revision": "0513feed0b161500b05a0b00511d943a"
  },
  {
    "url": "assets/js/59.e50d30b5.js",
    "revision": "d2e091c8add8e867e7e453587bdc1f11"
  },
  {
    "url": "assets/js/6.5fb2fd57.js",
    "revision": "0084ccaa562d1bf0d455bb355cae43e6"
  },
  {
    "url": "assets/js/60.08ddaf34.js",
    "revision": "de550fd1fe82c9df300033350edc2e0c"
  },
  {
    "url": "assets/js/61.d3f05eaa.js",
    "revision": "1483cf3acbb021ec10fd2e07547a221f"
  },
  {
    "url": "assets/js/62.1ce65943.js",
    "revision": "ef5599156555177e2b0bafda68c9c0d3"
  },
  {
    "url": "assets/js/63.86b60f1d.js",
    "revision": "4e26eb0adb4033443726febe853ac5d4"
  },
  {
    "url": "assets/js/64.e7ed9f35.js",
    "revision": "fabc742d5fdfcd820928aabeccd7a87f"
  },
  {
    "url": "assets/js/65.601e4210.js",
    "revision": "f44fd2c9c31e7ce802b1c59170722f23"
  },
  {
    "url": "assets/js/66.1ac07401.js",
    "revision": "9fbf06718036d5c21ff17e62ae60b720"
  },
  {
    "url": "assets/js/67.4a09f2e9.js",
    "revision": "de59711fc86c9d599364a6b85ea396cd"
  },
  {
    "url": "assets/js/68.46a40b5c.js",
    "revision": "010a7492325cf6bf41561fa74caf904b"
  },
  {
    "url": "assets/js/69.4f85c5fc.js",
    "revision": "3b022fcc82adfa316b4d9d8c0572c326"
  },
  {
    "url": "assets/js/7.e49f0848.js",
    "revision": "73ce91bcf32078b7550ba5189b17965f"
  },
  {
    "url": "assets/js/70.6038337e.js",
    "revision": "c876b1dcb871e5ffc661d42647eb42e4"
  },
  {
    "url": "assets/js/8.f6c2b170.js",
    "revision": "7dea8abb10dd15fb614c522602bee431"
  },
  {
    "url": "assets/js/9.8140b3c4.js",
    "revision": "928bcc6fe448b7eaca45455465027db3"
  },
  {
    "url": "assets/js/app.083ce341.js",
    "revision": "a74482043109e7e6bd8a893d33c28f1d"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "61642466d62ceee485570c0d4de728d2"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "9ce73036a43727f538191043dbd7ac22"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "d04f9e7dab69ba005f9e1ba1d4fb9ba9"
  },
  {
    "url": "DDL/createView.html",
    "revision": "1937e17622547ab3d715cccc9bb35821"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "0c62bf2e181aeeb0befc1ebb78ce79c8"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "d09612127ca6f2ff094ed0fd448a8720"
  },
  {
    "url": "DDL/index.html",
    "revision": "88274a18845938007595c963f7485862"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "5dcb99683b23f59333fbcb8a88ca858c"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "b1f2fddae4e1688af03c28c24b819564"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "ea3a2cc7b9c2e989d7cf9fa2f897ab2c"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "64b60fa45b2c2454135f67a750df7923"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "5120868bd06714d607967f5533134edb"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "ead8ae9e4195304f3fd2be02576033d2"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "5048386b7ebf6a51b7a580b9607a074a"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "b80c8db05897e95ae3ca71e072d7aad7"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "0eb38f1f66e95b06cd5f6b5f714961aa"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "5b8ba25361cd6a739ef52c99b25b08c0"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "7dffad8ae87e284dce176ec7778ea02f"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "dad6ec8a780a418e1a831e2255b6b95b"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "cd47ef8167aace990d1200463b5b4ee5"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "278229e4a173996322fd5ec50f5745cf"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "a57e634b18e2d7a7a8cee9268b3e9cbe"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "813c5bdfa48997a4a4d6db66e95d7109"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "40cfd1effb8dea6f0d262813baa1c4e0"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "7dacb01a364acd3d01a2276b468c46f4"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "673c89bc2d383199a81327bb77b78d71"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "1354083d719161f381fcc3ad10d22b10"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "4917653a92d652a113ed4c6a23daf90a"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "95e63cbd455cf462d6cfd4ce3ed94d29"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "580de16cad055073425e7450bde051a5"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "e00e8a080804ee2d2683430a7aff52c4"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "fe43ebc6700b172d0507cd4a914a8207"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "97089d554e48b7438a4aad5f38e13a3c"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "6c411e8d203e172c7ed2e9929cd971a7"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "32b4a87762970364e88b85352714af1c"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "44f33cd4ff72d0106efd9905e5a6bf9f"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "35f9a3804a64e7c4599c3c04bb243865"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "ebbf0c1ad234f7cc359fa283b3f5409c"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "1b1068eb6c2dde7d92fa18ec3aa76ed8"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "49e44c182132d29ef19fe020d2e1a9c7"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "ad21095240a737f0d0428b20108e436d"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "4a3d0c3c74dd599904e667c7b3344ade"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "71924334ad609d9a071a60ba8ed59ec0"
  },
  {
    "url": "Design/index.html",
    "revision": "00a2447d640fd5575deefeaa95e2fa11"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "736658cc44afcc4f58f1309b5bf2e9df"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "5d13c6c628ff9e73326c2c33be8bde63"
  },
  {
    "url": "Design/normalization.html",
    "revision": "209b570afafd734efa23cfb56ba0cee4"
  },
  {
    "url": "DMIT-1508.github.png",
    "revision": "4387056da54af3d8bbcc0d8b2cc3d2c2"
  },
  {
    "url": "DMIT-1508.png",
    "revision": "4f1e0c3d7fd329e2f9d715429f5f3c23"
  },
  {
    "url": "DML/delete.html",
    "revision": "47d97c5a1e943e8193d4e6ad0a1cb598"
  },
  {
    "url": "DML/index.html",
    "revision": "775683e680d1e951b161589764b053bc"
  },
  {
    "url": "DML/insert.html",
    "revision": "b781dbcecc9bbeda672229675ede7fb7"
  },
  {
    "url": "DML/update.html",
    "revision": "429c1628947ffef696e80b3acd9a1e37"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "95258db1b5adf055b38674db09aab8fe"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "9a9994711654dde73b3ac3f9630253aa"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "25abb8fd59476f5246adb2e6d81016ac"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "4d816f429f9d8054446f1f402afb0a50"
  },
  {
    "url": "SQL/index.html",
    "revision": "7d9b8e5d41175ec114cb1182c429781c"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "c6ff1959a7795777aa7aa30f8c6bb28c"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "360142a72a93ccf07e0558a6eca7389b"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "8c237ff7c5290bd6d4f2c4a47b4832a7"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "0bf01df6eb5f31384b5d91baa4e421c6"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "06ba013f8c67c1532aea0a568846ebf1"
  },
  {
    "url": "SQL/unions.html",
    "revision": "f9fa6a6447d70abc01d0f1bedf3d38ec"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "c2fd1f4a3fa9a5e84e3c54d201996abb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
