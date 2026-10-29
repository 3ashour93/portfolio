#!/bin/bash
# ============================================================
# Omar Ashour Portfolio — Image Downloader
# Run this script from Terminal inside the astro-portfolio folder:
#   bash download-images.sh
# ============================================================

BASE="https://static.wixstatic.com/media"
REFERER="https://www.oashour.me/"
DIR="public/images/projects"

download() {
  local url="$1"
  local dest="$2"
  echo "  → $dest"
  curl -sL \
    -H "Referer: $REFERER" \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
    -H "Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8" \
    "$url" -o "$dest"
}

# ── Qatar Law Forum ──────────────────────────────────────────
echo "Qatar Law Forum..."
download "$BASE/0cd8cf_30c4ec261cf749d7b378b31785e34a06~mv2.jpg" "$DIR/qatar-law-forum/hero.jpg"
download "$BASE/0cd8cf_d302d82962914935b877aaa90bb412b8~mv2.jpg" "$DIR/qatar-law-forum/img-1.jpg"
download "$BASE/0cd8cf_45a9a97b712f46eaad592170b6d2035d~mv2.jpg" "$DIR/qatar-law-forum/img-2.jpg"
download "$BASE/0cd8cf_cf0acf0487c84a25a4c01b5d5f0f3f3e~mv2.png" "$DIR/qatar-law-forum/img-3.jpg"

# ── eCourt ───────────────────────────────────────────────────
echo "eCourt..."
download "$BASE/0cd8cf_281a866a2fdd4c33bb70e21442fc666f~mv2.png"  "$DIR/ecourt/hero.jpg"
download "$BASE/0cd8cf_9e9935ae63f7408ab0e187f5730946de~mv2.jpg"  "$DIR/ecourt/img-1.jpg"
download "$BASE/0cd8cf_e338bab1bd4241e991e7505b96ad4fc2~mv2.png"  "$DIR/ecourt/img-2.jpg"
download "$BASE/0cd8cf_9fae4d92bb39451fbcb411875f0f38b4~mv2.png"  "$DIR/ecourt/img-3.jpg"
download "$BASE/0cd8cf_6e97983c997a47f2a45cfc48568002a3~mv2.png"  "$DIR/ecourt/img-4.jpg"

echo ""
echo "✓ Done! Images saved to $DIR/"
echo ""
echo "Note: For the remaining 8 projects (DLF 2026, QICDRC, AFC Asian Cup,"
echo "Design Doha, SIFoCC, AR Anniversary, RecyQ, VitaLife) — they don't"
echo "have dedicated pages on your current Wix site. Placeholder images from"
echo "your PDF portfolio are already in those folders. Replace them with your"
echo "own images using the naming convention in DEPLOY.md."
