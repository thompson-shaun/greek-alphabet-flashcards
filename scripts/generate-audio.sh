#!/usr/bin/env bash
set -euo pipefail

if ! command -v say >/dev/null 2>&1; then
  echo "Error: macOS 'say' command not found."
  echo "Run this script on macOS or replace with your own TTS generator."
  exit 1
fi

out_dir="assets/audio"
mkdir -p "$out_dir"

# Use a native Greek voice when available.
voice="Melina"
if ! say -v "?" | grep -q "^${voice}[[:space:]]"; then
  echo "Error: Greek voice '${voice}' is not installed."
  echo "Install additional macOS voices and retry."
  exit 1
fi

# order|slug|tts text (Greek)
entries=(
  "01|alpha|Άλφα."
  "02|beta|Βήτα."
  "03|gamma|Γάμμα."
  "04|delta|Δέλτα."
  "05|epsilon|Έψιλον."
  "06|zeta|Ζήτα."
  "07|eta|Ήτα."
  "08|theta|Θήτα."
  "09|iota|Ιώτα."
  "10|kappa|Κάππα."
  "11|lambda|Λάμδα."
  "12|mu|Μι."
  "13|nu|Νι."
  "14|xi|Ξι."
  "15|omicron|Όμικρον."
  "16|pi|Πι."
  "17|rho|Ρω."
  "18|sigma|Σίγμα."
  "19|tau|Ταυ."
  "20|upsilon|Ύψιλον."
  "21|phi|Φι."
  "22|chi|Χι."
  "23|psi|Ψι."
  "24|omega|Ωμέγα."
)

for entry in "${entries[@]}"; do
  IFS='|' read -r order slug text <<<"$entry"
  out_file="$out_dir/${order}-${slug}.m4a"
  say -v "$voice" -r 135 "$text" -o "$out_file"
  echo "Generated $out_file"
done

echo "Done."
