# Script to rename all .md files to .mdx for Mintlify compatibility
# Excludes non-content files like README.md, CLAUDE.md, etc.

$excludeFiles = @(
    "README.md",
    "CLAUDE.md", 
    "screenshot-update-plan.md",
    "wp_md_cleaner_guide.md",
    "font-awesome-example.md"
)

# Get all .md files recursively, excluding the ones in the exclude list
$mdFiles = Get-ChildItem -Path . -Filter "*.md" -Recurse | 
    Where-Object { $excludeFiles -notcontains $_.Name }

$count = 0
foreach ($file in $mdFiles) {
    $newName = $file.FullName -replace '\.md$', '.mdx'
    Rename-Item -Path $file.FullName -NewName $newName
    Write-Host "Renamed: $($file.Name) -> $($file.Name -replace '\.md$', '.mdx')"
    $count++
}

Write-Host "`nTotal files renamed: $count"
