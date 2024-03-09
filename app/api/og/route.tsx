import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const font = fetch(
  new URL('../../../assets/fonts/CalSans-SemiBold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontData = await font;
    const { searchParams } = new URL(req.url);
    // console.log(import.meta.url);

    // const logoData = await fetch(
    //   new URL('../../images/logo.png', import.meta.url),
    // )
    //   .then((res) => res.arrayBuffer())
    //   .then(
    //     (buf) =>
    //       `data:image/jpeg;base64,${Buffer.from(buf).toString('base64')}`,
    //   );

    const imageData = await fetch(
      new URL('../../../images/og-background.jpeg', import.meta.url),
    )
      .then((res) => res.arrayBuffer())
      .then(
        (buf) =>
          `data:image/jpeg;base64,${Buffer.from(buf).toString('base64')}`,
      );

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

    return new ImageResponse(
      (
        <div
          tw="h-full w-full flex items-center justify-center bg-stone-100"
          style={{ backgroundImage: `url(${imageData})` }}>
          <div tw="flex items-center justify-center h-full">
            <div tw="flex flex-col justify-between items-center w-full h-full p-20">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 480.000000 480.000000"
                preserveAspectRatio="xMidYMid meet">
                <g
                  transform="translate(0.000000,480.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none">
                  <path
                    d="M2195 4639 c-388 -39 -736 -162 -1046 -370 -464 -311 -799 -788 -930
-1324 -49 -202 -63 -320 -63 -540 0 -360 65 -652 215 -965 74 -153 128 -242
235 -385 109 -146 196 -239 328 -352 274 -235 622 -410 970 -488 431 -96 907
-60 1303 99 309 124 545 278 768 501 351 351 565 775 642 1275 12 81 17 174
17 315 0 354 -65 651 -210 955 -226 472 -577 829 -1041 1056 -372 183 -798
263 -1188 223z m473 -321 l63 -13 -94 -150 c-97 -155 -277 -438 -282 -443 -2
-2 -27 36 -56 85 -29 48 -103 167 -165 263 -110 174 -148 240 -142 244 2 2 46
10 98 19 113 19 475 16 578 -5z m354 -95 c49 -21 88 -40 88 -43 0 -8 -40 -73
-175 -285 -59 -93 -124 -196 -144 -228 -20 -31 -110 -175 -201 -320 -90 -144
-179 -287 -198 -317 -33 -51 -35 -53 -49 -35 -26 36 -677 1079 -705 1131 l-28
51 80 37 c87 40 105 43 113 22 6 -14 412 -659 504 -800 l45 -69 18 23 c10 13
139 214 286 447 148 232 271 423 274 423 3 0 44 -17 92 -37z m474 -238 c40
-31 76 -60 79 -65 3 -5 -54 -100 -126 -212 -357 -550 -832 -1303 -902 -1428
-64 -116 -69 -137 -73 -335 -2 -99 -3 -480 -4 -847 l0 -668 -115 0 -114 0 -3
853 c-3 841 -3 853 -24 903 -35 86 -232 404 -749 1209 -155 242 -291 456 -303
476 l-22 36 28 25 c30 28 131 98 141 98 3 0 133 -204 289 -453 156 -248 309
-492 341 -542 31 -49 130 -205 219 -345 89 -140 170 -266 180 -279 l19 -23 49
76 c177 273 771 1210 894 1409 56 92 107 167 113 167 5 0 42 -25 83 -55z m317
-262 c41 -43 89 -95 107 -116 l34 -39 -454 -451 c-249 -249 -473 -470 -498
-492 l-46 -40 41 60 c22 33 74 115 116 182 42 67 100 159 130 205 70 107 284
442 400 626 50 78 91 142 93 142 1 0 35 -35 77 -77z m-2633 -233 c101 -157
230 -359 288 -450 57 -91 119 -187 137 -215 35 -54 117 -183 128 -201 10 -18
-434 428 -687 689 -214 222 -237 249 -225 264 32 41 172 203 174 201 1 -2 85
-131 185 -288z m2943 -167 c25 -43 51 -90 58 -105 12 -27 7 -32 -527 -562
-297 -294 -552 -552 -568 -574 -63 -92 -61 -59 -66 -837 l-5 -710 -90 -22
c-49 -13 -100 -25 -113 -28 l-23 -6 3 778 3 778 32 67 c17 37 45 87 62 111 16
24 195 207 398 408 202 200 460 457 573 571 113 113 208 207 212 207 3 1 26
-34 51 -76z m-3352 0 c35 -38 255 -264 490 -503 513 -524 567 -583 607 -658
62 -116 62 -112 62 -934 0 -412 -2 -748 -4 -748 -1 0 -16 4 -32 9 -16 6 -68
21 -116 36 l-87 25 -3 718 -3 717 -24 48 c-27 56 -195 236 -723 779 -197 202
-358 370 -358 374 0 7 56 111 92 172 11 17 23 32 27 32 4 0 37 -30 72 -67z
m-183 -431 c85 -87 433 -452 471 -495 l24 -27 -326 0 -327 0 0 95 c0 131 16
270 46 398 14 59 28 107 30 107 2 0 39 -35 82 -78z m3731 -145 c11 -67 23
-179 27 -249 l7 -128 -348 0 -349 0 89 93 c96 99 237 240 410 407 l108 105 18
-53 c10 -29 27 -108 38 -175z m-2978 -624 c24 -27 55 -60 68 -75 l24 -28 -486
0 -486 0 -10 38 c-5 20 -11 54 -14 75 l-6 37 433 0 432 0 45 -47z m2995 0 c-4
-27 -9 -60 -12 -75 l-6 -28 -516 0 -515 0 24 28 c13 15 44 48 68 75 l45 47
459 0 459 0 -6 -47z m-2846 -378 l0 -75 -463 0 -463 0 -22 68 c-12 38 -22 71
-22 75 0 4 218 7 485 7 l485 0 0 -75z m2770 63 c0 -16 -27 -94 -41 -120 -9
-17 -34 -18 -499 -18 l-490 0 0 75 0 75 515 0 c405 0 515 -3 515 -12z m-2788
-333 c9 -4 13 -22 11 -58 0 -28 -2 -211"
                  />
                </g>
              </svg>

              <div tw="flex flex-col items-center">
                <h1 tw="text-7xl text-stone-900 font-bold text-center mb-0 leading-tight">
                  {title}
                </h1>
                <p tw="text-stone-700 font-semibold capitalize mt-4 text-xl text-center">
                  yuurrific.com
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Cal Sans',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
