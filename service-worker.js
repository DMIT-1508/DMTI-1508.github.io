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
    "revision": "89a1e39008f7bb5ac05c9224183ab5f3"
  },
  {
    "url": "about/index.html",
    "revision": "202f0cb9ac694f6ca7320da6fa484a83"
  },
  {
    "url": "about/LOGs.html",
    "revision": "ae3d076a9ee202d449c0b0ac31f47a29"
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
    "url": "assets/js/11.2ef4a9e5.js",
    "revision": "3ee60cdd6a7950e7f72bd4efe70cf964"
  },
  {
    "url": "assets/js/12.3082c272.js",
    "revision": "f6a122c0aef61da3fb28b4b422812300"
  },
  {
    "url": "assets/js/13.dda25d67.js",
    "revision": "9c6cdfb290592cc38b2d65631465e8c7"
  },
  {
    "url": "assets/js/14.30dc656b.js",
    "revision": "88f5ae035bbf66d0382d33bd29534858"
  },
  {
    "url": "assets/js/15.c8a5f0c8.js",
    "revision": "077097ecebb921cfe81180f3c2ea1844"
  },
  {
    "url": "assets/js/16.604abb2e.js",
    "revision": "2542801e8deb4a0b353ce5b0ed4f35ea"
  },
  {
    "url": "assets/js/17.042e8f0b.js",
    "revision": "ae03c8ac5b537045be5f4ebe1efdc0f8"
  },
  {
    "url": "assets/js/18.ab367621.js",
    "revision": "555a0227f5aa3f4c801150888bca8311"
  },
  {
    "url": "assets/js/19.d6d5dedf.js",
    "revision": "0197a78ddbb6fbaffc16cae86afff99f"
  },
  {
    "url": "assets/js/2.8d7a3014.js",
    "revision": "cb6254300e5c1c361d1c3d7906474b08"
  },
  {
    "url": "assets/js/20.3eecb9e8.js",
    "revision": "bf078ec0a6d80bdbe0f4bc06d18f07b9"
  },
  {
    "url": "assets/js/21.33e97420.js",
    "revision": "83193c69f8f70ee666d01fd18a5b13f7"
  },
  {
    "url": "assets/js/22.2c78727b.js",
    "revision": "4ae89ee5ddd02522f2e7f1b8c710a0e9"
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
    "url": "assets/js/32.17fe7e1f.js",
    "revision": "19581b00969b74a45daf2033d9ce240f"
  },
  {
    "url": "assets/js/33.c7be4a21.js",
    "revision": "44e9ebba8b7679d7307d1634ff009cff"
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
    "url": "assets/js/49.5338ddb7.js",
    "revision": "ef0e3e2d02f2efe5d5e657e64a50a6b5"
  },
  {
    "url": "assets/js/5.48c89cb7.js",
    "revision": "005778d074ff1d360d437aedabfe8df3"
  },
  {
    "url": "assets/js/50.3782633e.js",
    "revision": "201f3bc20e2029ff3a6e0ad2c7651350"
  },
  {
    "url": "assets/js/51.2330a2c5.js",
    "revision": "23b585601d1bbd0a0708c0f7306e46fb"
  },
  {
    "url": "assets/js/52.3c9ee687.js",
    "revision": "11f19b65fb29c92824b2b0f4b35890ef"
  },
  {
    "url": "assets/js/53.977da99e.js",
    "revision": "085526718abbd5161d82659dbb4305d2"
  },
  {
    "url": "assets/js/54.d93ce6c6.js",
    "revision": "73f3a7ce3457dd299a15d49987b6fc5f"
  },
  {
    "url": "assets/js/55.5a9d9e57.js",
    "revision": "cebce5bc40998838170d29ea420e3733"
  },
  {
    "url": "assets/js/56.3708bed5.js",
    "revision": "655a57882628d77194eab186f8976737"
  },
  {
    "url": "assets/js/57.7dc2c7ba.js",
    "revision": "efe91b993ce9ada32a7ea0accc86423a"
  },
  {
    "url": "assets/js/58.976ff569.js",
    "revision": "0513feed0b161500b05a0b00511d943a"
  },
  {
    "url": "assets/js/59.dfddef3d.js",
    "revision": "d2e091c8add8e867e7e453587bdc1f11"
  },
  {
    "url": "assets/js/6.d993e824.js",
    "revision": "ec8afdcfa42ebc8e8c1d0c279346dbbd"
  },
  {
    "url": "assets/js/60.f404c390.js",
    "revision": "9cd51a8f6ea30ac44795db1eb84da1f0"
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
    "url": "assets/js/app.55437a01.js",
    "revision": "888317fa8c13b73518b13b3adff89a61"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "5e19db703399ae54c5e7494d7c91f46c"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "e08268ba00cc67a63a0d813673eb5fe1"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "25f50ed6ff047e1d0adcce6466a040f0"
  },
  {
    "url": "DDL/createView.html",
    "revision": "4cf86ea94950dcbe7046a12fb3d64443"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "282d5e710106732fc20063b286a4cdc1"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "5bf87ada86e5ca8110f5357f2e598290"
  },
  {
    "url": "DDL/index.html",
    "revision": "db78a1133aa6c6cffdbaa341f584a3d9"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "cb2db293227184c32852c0d94f445e35"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "d02d5a23dd2586daf07b311f485e4e3d"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "dc7f4f0c23fbf3f32ff91e6950acbdfc"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "fd3996e0031a99a68a238a28fce3b0ca"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "a628bdc33f9fedb0d93e7bb012b9a685"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "e3b477feab6c4296e8f12389b9938862"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "f7336667290e5acfc2409ee280f31fb4"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "6caecd60692c7a64e9011120bb50b8ac"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "0a66306700d1165e9cd07e7ec943149c"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "2c3bb196172d045b6c871aef19d194c0"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "550237fa359306e61cc8cca857e9c1a6"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "f9b9b3a92ed8a87101411ea879c038ba"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "c35e19632964abdbbe3a2408ab7d4d2f"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "68ec98b68028399b92c58d62f288a76c"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "8a9e74ac81366ee22efbffee7f1a9805"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "b9b80334fd0197450ce7b064b226d36c"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "4b97c5b34f9b2e78625bdcd5d9597d09"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "5fc76c8b1ebe2968d57f8d25dc4d99a8"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "3bfd2f1ea0369f944f82daf577356100"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "49660a873fd133decbfe8be95c3340d5"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "f4e3056ce3e0fe17ec828d443bf3a4c5"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "cc98138bbbd26ce4bd441ff16842eb39"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "b2f89e6892bda1a9cf5ce4e52a6c17cc"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "94033624d8a302f08fd3f48f55fac3ff"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "dae420c8d33db1ee299457e24293ff58"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "3e241386b4fffac9d8cadb5ed8e266b5"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "47255746a828dfdde491264780ed08dc"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "6833a218dffdc4343880b8eb3f72e15d"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "550ebcf391106592d9724e9f47ed24f7"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "a04e7fe861391b852c6ab03659c55b1b"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "f1a7d0c5daf01ba283d2e2027d479d8a"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "5b07666eadf3b79cd3fa313d4b37b793"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "ceec4c542db32d72a4bd68e5314048b9"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "497dbe2c8ba10d855133d08497f3e4c6"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "fa4153959c567a28d062b1bb910f8dc2"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "dfebe8ae693f52972e0fbde1914c328f"
  },
  {
    "url": "Design/index.html",
    "revision": "d968674462f578277032144155f82117"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "45385c5b01db7a575050a4c9014fd494"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "67c95add72ed09db93ac542906aee05f"
  },
  {
    "url": "Design/normalization.html",
    "revision": "94ec85ad199653759450e03ddc125870"
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
    "revision": "de9d4a445c6123351dc9028e4295106c"
  },
  {
    "url": "DML/index.html",
    "revision": "b0ed8c9d5382eb88ab31333fbab361cb"
  },
  {
    "url": "DML/insert.html",
    "revision": "74244ff6682edd1e9520034d8942ff8e"
  },
  {
    "url": "DML/update.html",
    "revision": "6d9c1f104676b0e9be90e9b26dfa3627"
  },
  {
    "url": "index.html",
    "revision": "fb5eaf005c3cffbe2efe7dab6f96b949"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "ce3e130d9da9e90bfb46eade381547f2"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "6fa96dd2aec6ee5fbaed6db82234eb22"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "2f94bc1ceee235308b6edd3c011dae25"
  },
  {
    "url": "SQL/index.html",
    "revision": "b6fcfbcacfb4269bf8f1c5520879c70d"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "afd01478302277d9bcc0fb5767baaa1e"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "4a5543efa98abb061f3c943509031ebe"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "c84351ee26cbf9214467b2037c58a3be"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "e6f1b0fdbf6efcfa60d44fce6fb96700"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "2b8e1ea45da4ebe0fca5f0c43d30d42e"
  },
  {
    "url": "SQL/unions.html",
    "revision": "fdfe9a2bf40c0601580168076f9e43ee"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "1fb26df02dae33e53457729f7c67b9c3"
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
