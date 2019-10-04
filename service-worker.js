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
    "revision": "0733f3d58920b078e7f608580d5afdda"
  },
  {
    "url": "about/index.html",
    "revision": "caafee76e37514e49eab05859a95e5dc"
  },
  {
    "url": "about/LOGs.html",
    "revision": "655aec7ccee3b50086fff93e286d1a76"
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
    "url": "assets/js/13.e16ac692.js",
    "revision": "2c07503f959290a267784eab25a45ba2"
  },
  {
    "url": "assets/js/14.074ff153.js",
    "revision": "b6f1224e3c595a2389a9c25581b15ba0"
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
    "url": "assets/js/20.96ca751b.js",
    "revision": "1d8ddc4c5a68dea8589021fe2af4fe52"
  },
  {
    "url": "assets/js/21.83a54c71.js",
    "revision": "d639d3f79e1176c7394d6fb2318a81ff"
  },
  {
    "url": "assets/js/22.747eaa6e.js",
    "revision": "d0e8cad64fb067786adef61a272ee013"
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
    "url": "assets/js/31.ceb03e15.js",
    "revision": "a974a7c9b4d9de0fefa9fc689f336155"
  },
  {
    "url": "assets/js/32.6d6d7270.js",
    "revision": "7f7354cb24d9a80d12e5bfdbc0555196"
  },
  {
    "url": "assets/js/33.0e900528.js",
    "revision": "91d06011e2b71a3aae7b19a168c2b029"
  },
  {
    "url": "assets/js/34.985f569b.js",
    "revision": "fd285286cec5e6b55788808231cf03ea"
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
    "url": "assets/js/5.290c9610.js",
    "revision": "70af4c4e6e30a4d0a773da99fd7233e7"
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
    "url": "assets/js/57.313e556f.js",
    "revision": "efe91b993ce9ada32a7ea0accc86423a"
  },
  {
    "url": "assets/js/58.afd35f95.js",
    "revision": "0513feed0b161500b05a0b00511d943a"
  },
  {
    "url": "assets/js/59.dfddef3d.js",
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
    "url": "assets/js/62.b0dd2c49.js",
    "revision": "db99b02746a3fce501e2d5e1441bf1ed"
  },
  {
    "url": "assets/js/63.ce270062.js",
    "revision": "d9c7709acf4eaf71cfb594c0622851c2"
  },
  {
    "url": "assets/js/64.cd6152ec.js",
    "revision": "5d46b9d8d9da641d99433f18799f3497"
  },
  {
    "url": "assets/js/65.40342d77.js",
    "revision": "5218b157788b3d6bba19f2899aa1dde8"
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
    "url": "assets/js/app.9e6ad681.js",
    "revision": "82ea47844a2e9115113e000e95736daa"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "c0aa214de8750c18fcbf4b3792300c20"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "3c410412a54d3b4d6579e77684275291"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "863ed6711dab9e0f88087dad87f210aa"
  },
  {
    "url": "DDL/createView.html",
    "revision": "5ba0643722a5598e8a1c9cde0592c400"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "412b3c00e466eda661fedc21da68338d"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "22472ea365462b99728bd573e01ca408"
  },
  {
    "url": "DDL/index.html",
    "revision": "164857a7e93146a84282a4649a198f78"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "71e1eb2a79fbdfba6aa71b079501290a"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "6b0741537c7483a69fe1c819f900b471"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "95bff5d4d5aa2acce41f178f3ea44948"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "610ab3b6c9b96e7de03c274999892876"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "f90969a6749b43ce703a970b5d1ef4de"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "67252eac21df25f9aadc810a0c542471"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "142707c9c2b8727e94b96ae0aae87563"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "7f317cbbf5ea12800f5d69fff194ef28"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "ba4e18ba6f006a4367c4a837f6510f96"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "4165696d794bec874a4c62b905ed20b8"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "813689f396508111a43fc5501dc761c6"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "e5acbe35c0f47cd3c20fdc08509f23b5"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "cee6eecd702ca2800fb1cada9eea9410"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "eaf63ba77fcdcdc06db9af2ad97ec174"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "7a1333b80466f2692230bac7131645ce"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "8fea2e5017ad24243529be33dbd1a211"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "56a372f87fa7b804b28603e8b335db3b"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "40da6c7d71708eca4e273f848531c34a"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "4a924cc95765ca8bae95a551ecdd92c6"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "e4e5b9f9a75313839ff55f29ecfff9e9"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "cdc6514f159b8b5ea6646609914cbf89"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "37191205c59e159bba927df8565f368f"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "deca3112547b7fced50243236b24e576"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "f8050a58bff7d578821d40e96cdf3108"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "691864f5812760da040472366cc87499"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "2b9b95848fea172d8dcbac9c124430ac"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "de318ec9a5c03738fd2e49da6d2b8479"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "07dff01fe8766c6f1e35e2b778207f40"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "9e3ead79fe1f400f8f138b3af65b4e28"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "caa31b7057046018bebb8054eaaf79a1"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "ab77d72c528c006d87c4cfffa2764f67"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "b8a885119252623a1630a14f1bc0d369"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "2e6fdfb77fde2a6aa24e552f3e6a44b1"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "7d32421fd358b2c76624b750d96815b4"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "5df7ae9e17c3ad05d4dfedf38f344ddb"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "e862156bfcde9c2fa8e131d4578e6411"
  },
  {
    "url": "Design/index.html",
    "revision": "dc455979c3e7be7efd76d4cc362c9f6d"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "0a589948cc012e733b36078cc9c337e3"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "c81a0ae982c4f6ece4f1210acc94e63a"
  },
  {
    "url": "Design/normalization.html",
    "revision": "87b9b12c68b79b822a86d84089786f14"
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
    "revision": "e4a87ff87a4d50b260c56f5ac825b720"
  },
  {
    "url": "DML/index.html",
    "revision": "ad26faa1728ef6483f38ea0547531c10"
  },
  {
    "url": "DML/insert.html",
    "revision": "54e7f303fb7f24c72b75484b6e5f3ead"
  },
  {
    "url": "DML/update.html",
    "revision": "bee8617b760f9ecca112339411a34d1a"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "9662a0ee8cc9133b6a125961355240c1"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "8520b910abe9fbe5abc0aadf26c0a53b"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "cb4aff60092ccb7cdc88a61732b5226d"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "fe8a15b310c9f62b3cecd2d2dc89f8a1"
  },
  {
    "url": "SQL/index.html",
    "revision": "7de165c3442e5b32ac4eb14988268257"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "a5a350bccee628b2d1a246fa8eac8742"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "08a170562efdd65ca3f652d4799176e2"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "ba0e10b769094d0e3674a27097cff5d7"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "cabe8640a17e719ae19a34fb85a4244d"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "22013fb673df8a26e738a9f3be335ef7"
  },
  {
    "url": "SQL/unions.html",
    "revision": "f55b9c7dfb51cbb0c7fc8b835409fa87"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "9d0923331f7fe8fb7119761d0a3c6323"
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
