#!/usr/bin/env bash
set -euo pipefail

if ! command -v say >/dev/null 2>&1; then
  echo "Error: macOS 'say' command not found."
  echo "Run this script on macOS or replace with your own TTS generator."
  exit 1
fi
if ! command -v afconvert >/dev/null 2>&1; then
  echo "Error: macOS 'afconvert' command not found."
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
  temp_base="$(mktemp /tmp/greek-audio.XXXXXX)"
  temp_aiff="${temp_base}.aiff"
  rm -f "$temp_base"

  out_wav="$out_dir/${order}-${slug}.wav"
  out_m4a="$out_dir/${order}-${slug}.m4a"

  say -v "$voice" -r 135 "$text" -o "$temp_aiff"
  afconvert "$temp_aiff" "$out_wav" -f WAVE -d LEI16

  # Keep m4a generation attempt for compatibility with existing references.
  # Some systems produce tiny/invalid m4a from `say`, so wav is primary.
  say -v "$voice" -r 135 "$text" -o "$out_m4a" || true

  rm -f "$temp_aiff"
  echo "Generated $out_wav"
done

echo "Done."
