#!/bin/bash
# Downloads client logos into public/images/clients/
# Run from Terminal inside the astro-portfolio folder:  bash download-logos.sh
DIR="public/images/clients"; mkdir -p "$DIR"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
dl(){ echo "  → $2"; curl -sL -A "$UA" "$1" -o "$DIR/$2"; }
dl "https://assets.bein.com/mena/sites/3/2015/06/beIN_Logo_2026_April.png"                                 bein.png
dl "https://www.tod.tv/assets/images/logo.svg"                                                             tod.svg
dl "https://qa.usembassy.gov/wp-content/uploads/sites/17/2022/05/use-doha-seal.png"                        us-embassy.png
dl "https://www.fairmont.com/content/dam/brands/fai/hotels/asia-and-middle-east/qa/doha/b663/msa_l_0000676.svg" fairmont-doha.svg
dl "https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-doha-large.svg"                    raffles-doha.svg
dl "https://actionprgroup.com/wp-content/uploads/ActionLogonormal.svg"                                     action-global.svg
echo; echo "Done:"; ls -la "$DIR"
