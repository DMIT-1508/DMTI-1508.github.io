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
    "revision": "2e13848b6bb21d0504ed893170760604"
  },
  {
    "url": "about/index.html",
    "revision": "9693d9b5878cb788fd1588342e0fde43"
  },
  {
    "url": "about/LOGs.html",
    "revision": "948d93d75a8c4aae51196fbc39217bb5"
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
    "url": "assets/js/10.1db59951.js",
    "revision": "4b34388044328a5ecc0105dd9ad1a28a"
  },
  {
    "url": "assets/js/11.bfdc315c.js",
    "revision": "79ac628507555e9156db375da6a79656"
  },
  {
    "url": "assets/js/12.9b73f3fb.js",
    "revision": "699dae5af9b14862b983c61b4151067f"
  },
  {
    "url": "assets/js/13.69f7be52.js",
    "revision": "9682a4869601a00de8db90dcd29dcb41"
  },
  {
    "url": "assets/js/14.bb52c1ce.js",
    "revision": "84c328e6bdd059bf9096ddce3bda04dc"
  },
  {
    "url": "assets/js/15.32427656.js",
    "revision": "a23ca7ee9c5e2b01430818ee8b800c56"
  },
  {
    "url": "assets/js/16.8cebe8e6.js",
    "revision": "4ee9552a80e98391d93bc3e76da3b701"
  },
  {
    "url": "assets/js/17.7dd6fcef.js",
    "revision": "0b371a6f46a45f488c089c6c91a3be7b"
  },
  {
    "url": "assets/js/18.739d9436.js",
    "revision": "b98fe4fdaa43f222e4e0a66c394217ed"
  },
  {
    "url": "assets/js/19.8d5aed53.js",
    "revision": "c04cf3f72a311ba1e95691cab9e30825"
  },
  {
    "url": "assets/js/2.8d7a3014.js",
    "revision": "cb6254300e5c1c361d1c3d7906474b08"
  },
  {
    "url": "assets/js/20.c08c09b5.js",
    "revision": "c74f4a574abc33bc0cab178a27bab74f"
  },
  {
    "url": "assets/js/21.4ec96fb8.js",
    "revision": "4762ff6624aa5ca6eac54042db3c8565"
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
    "url": "assets/js/5.c1671be4.js",
    "revision": "2f59767dbb481bc425f5d533549312e0"
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
    "url": "assets/js/6.e0551616.js",
    "revision": "0c18bae533f34b3864389c1829c458b7"
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
    "url": "assets/js/7.09729ff3.js",
    "revision": "a7f7e8ccaa172cbea38a62838c90e8b2"
  },
  {
    "url": "assets/js/70.6038337e.js",
    "revision": "c876b1dcb871e5ffc661d42647eb42e4"
  },
  {
    "url": "assets/js/8.5fccf165.js",
    "revision": "318b015bf266abaf5b9587283809eddb"
  },
  {
    "url": "assets/js/9.76f590fb.js",
    "revision": "ccb6945265c7eaa67785182d44f05072"
  },
  {
    "url": "assets/js/app.7fbde89b.js",
    "revision": "6d4c7a6fa42e7b4656e1857529fdb402"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "8c5ef2d7bda6a96fbd86b681e2f838fc"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "140cf2777e18117730042cc5b2f8b49f"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "07ac4e79a30b2bc27856269630351776"
  },
  {
    "url": "DDL/createView.html",
    "revision": "75202a2cb76ff748cc6c912efb92e42c"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "08097dc766a4fd9d435c660505ea3803"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "6b79c7e8a4314ba6db4beeb56887d810"
  },
  {
    "url": "DDL/index.html",
    "revision": "f6ea5da3433ccadd26793bc25589e6f2"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "557d5b72c7a836398e12699351d61f8c"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "bbe7b5ef28cfe57199cc232c007926dc"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "16ab5f78ada018d6634b8d878282eec7"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "349de822606f31ab6d684ab863ba630f"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "6fe0c67fdb0f7405445ce5b6a6555020"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "a841558eb8146a055dd544cca232f60e"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "a500495331a9a7df1fcc5aceccaf5034"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "611fc96ff3882412dd8824fd4de8c144"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "9db75688f031870d1baed0fe7811ba61"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "72b25af2f1bca85d5d3a5a8c0b5c14ac"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "597db43a6d6162ee11a07210d204e787"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "b328caaf9fb03886dfda21a164922c3b"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "dd192d13c70a3bc6b80608de88cf0223"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "d8fd226b64f5668f2f0c2639b5cc80f9"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "0c8ce0489133f27191a3100a4baf755e"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "a0cfaaddbae76fffdb6a7d3044be4914"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "8cda32028c69c1b004ba0d62ffaca7b6"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "a86e091ace751fbab3354ad4e36169df"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "ebbeef59a10b53eef4134d9ffbd736b6"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "07d9cfd7ccb1a0f175cf333b8f6c0178"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "4767389158a8f1a136ee1068c37aa5be"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "ead6caf04a1a27e06a19b00a401bb2e4"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "854b9c362c4fe1fc03cd0307f895f428"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "bca04c3d4e710139b69da559226f58c2"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "4b248f493577e02c304d4199dbc30c8f"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "58ff3791025fa8e619e40b9fdd0d1991"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "99918f4966670cec28a41af9d9204f78"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "ae28354b61d11a91bda372e2a090d2f1"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "977a152e17cc0aef702ab8a3693e5072"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "069de823769bc1c21f80d3589d2b9142"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "a9fef71537b71cfc14ff5c4ef46b7958"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "ffc1088ba8ab073ef0353d601e93e754"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "d26640c82304d4de8ced9d5610e8f63c"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "c358bef8890aae48257510913f5ae36b"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "796099d364c60866cd7f7d866267d040"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "8067a47104dffad5f8941dfdc570e3cd"
  },
  {
    "url": "Design/index.html",
    "revision": "f30048dc55308f63642732eceb8a1b7f"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "cac1d3ff8da196544296525670da8601"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "9198a2eaa542cbcbc0b11103d7f1e9a2"
  },
  {
    "url": "Design/normalization.html",
    "revision": "b13f9068f8bb953d0d6cf2cac8365768"
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
    "revision": "1ff4d56cba353d1939ee08087d09f9aa"
  },
  {
    "url": "DML/index.html",
    "revision": "77a1dc476f1f7a815770208aed9f2509"
  },
  {
    "url": "DML/insert.html",
    "revision": "46e5e21cd1ff717dd309548716557c13"
  },
  {
    "url": "DML/update.html",
    "revision": "ba0aaff7a57a9f379e344d48bef6d1ec"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "6d09751691167cfd06f0476b1fa95bd8"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "4483428e499f8431e7f8824704c0a17a"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "1a9f3933e98bb77170224e63070d8fb0"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "cd3dcc80a67654e76c57c37d3b3e7567"
  },
  {
    "url": "SQL/index.html",
    "revision": "9dc7dc619980f66c881daaab27a9b617"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "463ddd5897ad44c82cb06e4769f8a70d"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "30f39ad03b0409e48cd88c5de70954bf"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "a0f9df016852924e1edec2a0ab5110c6"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "19097824814baed2275398abeb72cd71"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "b2181536332695dbee316d1bbead6ff8"
  },
  {
    "url": "SQL/unions.html",
    "revision": "975bc4d7b3223abf7c3c3a2a932fd51c"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "68f7a8c654f477c97c2188d83db84bce"
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
