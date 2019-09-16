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
    "revision": "e8a4d67b36c7ce9ddb9aa2adc0ccfa79"
  },
  {
    "url": "about/index.html",
    "revision": "6a843e3019ddd4fdaaf80a67f9a27b04"
  },
  {
    "url": "about/LOGs.html",
    "revision": "8e3d59b45213e438b2cd15ca06ba5af2"
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
    "url": "assets/js/29.55d53743.js",
    "revision": "629bd27efba97ca9885786c663f6a477"
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
    "url": "assets/js/37.7f81918b.js",
    "revision": "80183f376eeac5a3e45b08db3e27ecc7"
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
    "url": "assets/js/58.b15d95c7.js",
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
    "url": "assets/js/68.8b19ed7a.js",
    "revision": "c5b02941133c564f5eb2917634d5260f"
  },
  {
    "url": "assets/js/69.9c35b6a5.js",
    "revision": "3168589943395c3455674e1b1614e007"
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
    "url": "assets/js/app.de7eef61.js",
    "revision": "541ad95f0aced1a1261fd186798f67a8"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "d307a6ed956c441f8c9d220880d76cfe"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "3a71cbfa66d1832633232b7187eab333"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "abc2df3b6299daf26cfd490cf43a3b8e"
  },
  {
    "url": "DDL/createView.html",
    "revision": "32cc527503bfaa8d40ec9284b52543ef"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "b3741fb3b174b888140f9463384f5d2c"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "fd8efa23554713b9115a762325f9b894"
  },
  {
    "url": "DDL/index.html",
    "revision": "ff859eaf3cdb88473c4dd7e0e952a2b4"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "115a4f84879020cd26e42d92d09a1237"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "bdad0ebb74b5c4c42367e929f72c3b3c"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "d3f6b4eeeb043dd6ae276ea001a7f446"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "7b6caa2cc960c01f8e61ac1ab6f34b46"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "e6db9d40cdc035cf900122e4b83af388"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "920728cc2fe13f16be79c6867c8585d9"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "2b73785e4e7839007b9b0e1b80a91004"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "20fc0290b62eb1defba3282b43cbddcf"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "d0c67c67c35ccf8a2d257b292a57d679"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "7db1bc7710820c28f808c8c14a642146"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "274707d3c6cff24f1b4bc99ded09b8d3"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "ee4dc7ed0f0d3be278895353b23c58e4"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "ba5603e8b65e7bc8e0ad0bf2e63cbf63"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "0798408f977fa5199c813b3a184de50c"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "f3c5db7a03d2135aaa2d1acacf1872d0"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "4c5eac6f670a5acdc1793e88e425dd2f"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "886ff7ccea6213760331683858322573"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "05e8e2374e2150b138d9a92b8fa917ef"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "195bb78210e1d41b4687646755b5b7eb"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "833795689e750cf068a29552db7ecbf0"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "68752d51a211e529538ca2ed98acaeb8"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "8d24ba692f5c5485bb281ab168e39053"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "c469d7aae841a13ccc50779643aa0d8a"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "87edf5e571465cd056e8af856d730e64"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "2f0067e9523df3b5186f87f470bf22e5"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "f1f8d84134816398fce6e4b4f86a8cb3"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "a55fd39f019e4fb32a8af6232c1967e4"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "6313ffaf5cb477bdd8b7b3636e202034"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "2129b2cdcc647df7c49fe421f990cf1d"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "2434028ff46dc7f7d424eb35b1f2d396"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "174a7141187c7a99a1edc1b922238ab8"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "be84ea883f5f9c7a650597f850d03a48"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "18a9408193f22720303429ba055e192b"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "d29f5edf4d6d1b956885ed22979cae69"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "66c3659b5876dc85049e180f4b15e299"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "3e7042c77a6adc1f8a26916ce36e8a10"
  },
  {
    "url": "Design/index.html",
    "revision": "14fbbb40066902122d88b69a30e29674"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "886244aac543c44e29a335b9596d9474"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "7191984c4d4cece97b3751a62d143e33"
  },
  {
    "url": "Design/normalization.html",
    "revision": "06d44a1d7de1e605e102f0e8631be984"
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
    "revision": "001652178d9048b01d0bf3288ecc67fc"
  },
  {
    "url": "DML/index.html",
    "revision": "fe6ad00b1de3a20dbec415788b8d5365"
  },
  {
    "url": "DML/insert.html",
    "revision": "63f445c1658fe70b5b78a8c7d3749b84"
  },
  {
    "url": "DML/update.html",
    "revision": "04c430a47b3b8bf9b5219a6b11dcc7e9"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "895e0bb7cdc1ea69661b0f758495ac67"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "74bb91297920c983291ca07b4f0bf83f"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "795ddc193796311a18355ee5f0424aca"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "91fc572f5a7e7fc878eb8d90d00892ac"
  },
  {
    "url": "SQL/index.html",
    "revision": "551a534b3c6481ed69c79d8f72f739aa"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "1a3938301639b2cee4b120587d85a349"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "e8616ac075938693715a325411844a48"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "e5d4080ef3d96cd433e2ce504fb0ce1f"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "c5be3586414dc11edecec33c2c02bcc5"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "cccde99c6fa648f82e996b789df133bd"
  },
  {
    "url": "SQL/unions.html",
    "revision": "81012e08e5581fd973a3531ba70365cc"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "9cdc5ff717c658a5f52b46c08465f058"
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
