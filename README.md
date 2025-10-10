# Metronic 9 | All-in-One Tailwind based HTML/React/Next.js Template for Modern Web Applications

## Getting Started

The official [Metronic Next.js Documentation](https://docs.keenthemes.com/metronic-nextjs) will be released soon,
alongside the stable Metronic release, expected within the next week.

### Prerequisites

- Node.js 16.x or higher
- Npm or Yarn
- Tailwind CSS 4.x
- React 19.x
- Next.js 15.3.x
- PostgreSQL 17.4.x

## ReUI Components

Metronic now leverages [ReUI](https://reui.io), our open-source React component library.

Star the [ReUI on GitHub](https://github.com/keenthemes/reui) to help us grow the project and stay updated on new features!

### Installation

To set up the project dependencies, including those required for React 19, use the `--force` flag to resolve any dependency conflicts:

```bash
npm install --force
```

### Database Deployment

This will create the necessary tables in database for user authorization and user management apps :

```bash
npx prisma db push
```

Once your schema is deployed, you need to generate the Prisma Client:

```bash
npx prisma generate
```

### Development

Start the development server:

```bash
npm run dev
```

## Code Quality

- `pnpm lint`: ESLint denetimi çalışır ve uyarıları 0'a zorlar (`--max-warnings=0`).
- `pnpm format`: Prettier ile proje genelinde biçimlendirme uygular.
- `pnpm typecheck`: TypeScript tip kontrolünü `--noEmit` ile çalıştırır.

Notlar:

- ESLint kural setleri: `next/core-web-vitals`, `react`, `import`, `jsx-a11y`, `tailwindcss`.
- Tailwind sınıf sıralaması için `prettier-plugin-tailwindcss` etkindir.

### A11y & HTML Pitfalls

- Anchor nesting ihlalleri (ör. `<a>` içinde başka bir `<a>`) `ERROR` seviyesindedir (`jsx-a11y/anchor-is-valid`).
- İlgili ihlaller `pnpm lint` sırasında kırmızı hata olarak raporlanır.

### Setting Up the Demo Layout

Open `app/(protected)/layout.tsx` and change `Demo1Layout` to any demo, for example, `Demo5Layout` and you will switch entire app layout to the selected demo.

```bash
<Demo5Layout>
	{children}
</Demo5Layout>
```

### Reporting Issues

If you encounter any issues or have suggestions for improvement, please contact us at [support@keenthemes.com](mailto:support@keenthemes.com).
Include a detailed description of the issue or suggestion, and we will work to address it in the next stable release.

## Branch Strategy, Conventional Commits, and Release Flow

### Branch Strategy

- Default branch: `main`
- Branch naming:
  - Features: `feature/<short-desc>`
  - Fixes: `fix/<short-desc>`
  - Chores/infra: `chore/<short-desc>`
  - Releases: `release/<version>` (otomatik oluşturulabilir)
- PR policy: Küçük, odaklı PR’lar; açıklayıcı başlık ve özet.

### Conventional Commits

- Format: `<type>(<optional-scope>): <subject>`
- Types (önerilen):
  - `feat`: yeni özellik
  - `fix`: hata düzeltmesi
  - `docs`: dokümantasyon
  - `style`: kod biçimlendirme (mantık değişikliği yok)
  - `refactor`: iç yapısal değişiklik
  - `perf`: performans iyileştirmesi
  - `test`: test ekleme/düzeltme
  - `build`: derleme/bağımlılık değişiklikleri
  - `ci`: CI ayarları
  - `chore`: diğer bakım işleri
- Örnekler:
  - `feat(layout-1): add quick date range popover`
  - `fix(ui/tooltip): prevent nested anchor warning`

Commit doğrulama:

- `pnpm commit` ile etkileşimli commit (Commitizen) akışı başlar.
- Commit mesajları `commitlint` ile doğrulanır (Husky `commit-msg` hook).

### Pre-commit Hooks

- `lint-staged` aracılığıyla dokunulan dosyalarda:
  - `eslint --fix --max-warnings=0`
  - `prettier --write`
- Manuel çalışma: `pnpm lint-staged`

### Release Flow (Changesets)

1. Değişiklik ekle: `pnpm changeset`
   - Sürüm tipi seçin (patch/minor/major) ve özet yazın.
2. Sürüm oluştur: `pnpm run release`
   - Versiyon artışı ve CHANGELOG’lar yazılır; commit edilir.
3. Yayın (opsiyonel paket yayını için): `pnpm run publish:packages`
4. PR & Merge: Release commit’i `main`’a alın; tag ve paket akışınızı CI ile otomatikleştirebilirsiniz.

Notlar:

- Single-repo yapı: Changesets tek paket (`metronic-react-starter-kit`) üzerinde çalışacak şekilde yapılandırıldı.
- Varsayılan ana dal `main`’dir; akış CI/CD’ye entegre edilebilir.
