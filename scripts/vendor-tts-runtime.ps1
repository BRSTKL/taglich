$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$piperDist = Join-Path $root 'node_modules\piper-tts-web\dist'
$onnxDist = Join-Path $root 'node_modules\onnxruntime-web\dist'
$target = Join-Path $root 'tts\runtime'

if (-not (Test-Path -LiteralPath $piperDist)) {
    throw "piper-tts-web is not installed. Run npm install first."
}

if (-not (Test-Path -LiteralPath $onnxDist)) {
    throw "onnxruntime-web is not installed. Run npm install first."
}

New-Item -ItemType Directory -Force -Path $target | Out-Null

$directItems = @{
    (Join-Path $piperDist 'piper-tts-web.js') = (Join-Path $target 'piper-tts-web.js')
    (Join-Path $piperDist 'worker') = (Join-Path $target 'worker')
    (Join-Path $piperDist 'piper') = (Join-Path $target 'piper')
    $onnxDist = (Join-Path $target 'onnx')
}

foreach ($entry in $directItems.GetEnumerator()) {
    $from = $entry.Key
    $to = $entry.Value

    if (-not (Test-Path -LiteralPath $from)) {
        throw "Missing runtime item: $from"
    }

    Copy-Item -LiteralPath $from -Destination $to -Recurse -Force
}
