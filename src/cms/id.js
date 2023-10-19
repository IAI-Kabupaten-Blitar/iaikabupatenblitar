const id = {
  auth: {
    login: "Masuk",
    loggingIn: "Masuk...",
    loginWithNetlifyIdentity: "Masuk dengan Identitas Netlify",
    loginWithAzure: "Masuk dengan Azure",
    loginWithBitbucket: "Masuk dengan Bitbucket",
    loginWithGitHub: "Masuk dengan GitHub",
    loginWithGitLab: "Masuk dengan GitLab",
    errors: {
      email: "Pastikan untuk memasukkan email Anda.",
      password: "Silakan masukkan kata sandi Anda.",
      identitySettings:
        "Tidak dapat mengakses pengaturan identitas. Saat menggunakan backend git-gateway, pastikan untuk mengaktifkan Layanan Identitas dan Git Gateway.",
    },
  },
  app: {
    header: {
      content: "Konten",
      workflow: "Alur kerja",
      media: "Media",
      quickAdd: "Tambah cepat",
    },
    app: {
      errorHeader: "Kesalahan dalam memuat konfigurasi CMS",
      configErrors: "Kesalahan Konfigurasi",
      checkConfigYml: "Periksa file config.yml Anda.",
      loadingConfig: "Memuat konfigurasi...",
      waitingBackend: "Menunggu backend...",
    },
    notFoundPage: {
      header: "Tidak Ditemukan",
    },
  },
  collection: {
    sidebar: {
      collections: "Koleksi",
      allCollections: "Semua Koleksi",
      searchAll: "Cari semua",
      searchIn: "Cari dalam",
    },
    collectionTop: {
      sortBy: "Urutkan berdasarkan",
      viewAs: "Tampilan sebagai",
      newButton: "%{collectionLabel} Baru",
      ascending: "Menaik",
      descending: "Menurun",
      searchResults: 'Hasil Pencarian untuk "%{searchTerm}"',
      searchResultsInCollection:
        'Hasil Pencarian untuk "%{searchTerm}" di %{collection}',
      filterBy: "Filter berdasarkan",
      groupBy: "Dikelompokkan berdasarkan",
    },
    entries: {
      loadingEntries: "Memuat Entri...",
      cachingEntries: "Caching Entri...",
      longerLoading: "Ini mungkin memakan beberapa menit",
      noEntries: "Tidak ada Entri",
    },
    groups: {
      other: "Lainnya",
      negateLabel: "Bukan %{label}",
    },
    defaultFields: {
      author: {
        label: "Penulis",
      },
      updatedOn: {
        label: "Diperbarui Pada",
      },
    },
  },
  editor: {
    editorControl: {
      field: {
        optional: "opsional",
      },
    },
    editorControlPane: {
      widget: {
        required: "%{fieldLabel} diperlukan.",
        regexPattern: "%{fieldLabel} tidak cocok dengan pola: %{pattern}.",
        processing: "%{fieldLabel} sedang diproses.",
        range:
          "%{fieldLabel} harus berada di antara %{minValue} dan %{maxValue}.",
        min: "%{fieldLabel} harus setidaknya %{minValue}.",
        max: "%{fieldLabel} harus %{maxValue} atau kurang.",
        rangeCount:
          "%{fieldLabel} harus memiliki antara %{minCount} dan %{maxCount} item.",
        rangeCountExact: "%{fieldLabel} harus memiliki tepat %{count} item.",
        rangeMin: "%{fieldLabel} harus setidaknya %{minCount} item.",
        rangeMax: "%{fieldLabel} harus %{maxCount} atau kurang item.",
        invalidPath: `'%{path}' bukan path yang valid`,
        pathExists: `Path '%{path}' sudah ada`,
      },
      i18n: {
        writingInLocale: "Menulis dalam %{locale}",
        copyFromLocale: "Isi dari bahasa lain",
        copyFromLocaleConfirm:
          "Apakah Anda ingin mengisi data dari bahasa %{locale}?\nSemua konten yang ada akan ditimpa.",
      },
    },
    editor: {
      onLeavePage: "Apakah Anda yakin ingin meninggalkan halaman ini?",
      onUpdatingWithUnsavedChanges:
        "Anda memiliki perubahan yang belum disimpan, harap simpan sebelum memperbarui status.",
      onPublishingNotReady:
        'Harap perbarui status menjadi "Siap" sebelum menerbitkan.',
      onPublishingWithUnsavedChanges:
        "Anda memiliki perubahan yang belum disimpan, harap simpan sebelum menerbitkan.",
      onPublishing: "Apakah Anda yakin ingin menerbitkan entri ini?",
      onUnpublishing:
        "Apakah Anda yakin ingin membatalkan penerbitan entri ini?",
      onDeleteWithUnsavedChanges:
        "Apakah Anda yakin ingin menghapus entri yang sudah diterbitkan ini, serta perubahan yang belum disimpan dari sesi saat ini?",
      onDeletePublishedEntry:
        "Apakah Anda yakin ingin menghapus entri yang sudah diterbitkan ini?",
      onDeleteUnpublishedChangesWithUnsavedChanges:
        "Ini akan menghapus semua perubahan yang belum diterbitkan pada entri ini, serta perubahan yang belum disimpan dari sesi saat ini. Apakah Anda tetap ingin menghapus?",
      onDeleteUnpublishedChanges:
        "Semua perubahan yang belum diterbitkan pada entri ini akan dihapus. Apakah Anda tetap ingin menghapus?",
      loadingEntry: "Memuat entri...",
      confirmLoadBackup:
        "Backup lokal telah dipulihkan untuk entri ini, apakah Anda ingin menggunakannya?",
    },
    editorInterface: {
      toggleI18n: "Alihkan i18n",
      togglePreview: "Alihkan pratinjau",
      toggleScrollSync: "Sinkronisasi gulir",
    },
    editorToolbar: {
      publishing: "Menerbitkan...",
      publish: "Terbitkan",
      published: "Telah Diterbitkan",
      unpublish: "Batalkan Penerbitan",
      duplicate: "Duplikat",
      unpublishing: "Membatalkan penerbitan...",
      publishAndCreateNew: "Terbitkan dan buat yang baru",
      publishAndDuplicate: "Terbitkan dan duplikat",
      deleteUnpublishedChanges: "Hapus perubahan yang belum diterbitkan",
      deleteUnpublishedEntry: "Hapus entri yang belum diterbitkan",
      deletePublishedEntry: "Hapus entri yang sudah diterbitkan",
      deleteEntry: "Hapus entri",
      saving: "Menyimpan...",
      save: "Simpan",
      statusInfoTooltipDraft:
        'Status entri diatur sebagai draf. Untuk menyelesaikan dan mengirimkannya untuk ditinjau, atur statusnya menjadi "Dalam tinjau"',
      statusInfoTooltipInReview:
        "Entri sedang ditinjau, tidak diperlukan tindakan lebih lanjut. Namun, Anda masih dapat membuat perubahan tambahan saat ini.",
      deleting: "Menghapus...",
      updating: "Memperbarui...",
      status: "Status: %{status}",
      backCollection: " Menulis dalam koleksi %{collectionLabel}",
      unsavedChanges: "Perubahan yang belum disimpan",
      changesSaved: "Perubahan disimpan",
      draft: "Draf",
      inReview: "Dalam tinjau",
      ready: "Siap",
      publishNow: "Terbitkan sekarang",
      deployPreviewPendingButtonLabel: "Periksa Pratinjau",
      deployPreviewButtonLabel: "Lihat Pratinjau",
      deployButtonLabel: "Lihat Langsung",
    },
    editorWidgets: {
      markdown: {
        bold: "Tebal",
        italic: "Miring",
        code: "Kode",
        link: "Tautan",
        linkPrompt: "Masukkan URL tautan",
        headings: "Judul",
        quote: "Kutipan",
        bulletedList: "Daftar Berpoin",
        numberedList: "Daftar Bernomor",
        addComponent: "Tambahkan Komponen",
        richText: "Teks Kaya",
        markdown: "Markdown",
      },
      image: {
        choose: "Pilih gambar",
        chooseMultiple: "Pilih gambar",
        chooseUrl: "Sisipkan dari URL",
        replaceUrl: "Ganti dengan URL",
        promptUrl: "Masukkan URL gambar",
        chooseDifferent: "Pilih gambar lain",
        addMore: "Tambahkan gambar lain",
        remove: "Hapus gambar",
        removeAll: "Hapus semua gambar",
      },
      file: {
        choose: "Pilih file",
        chooseUrl: "Sisipkan dari URL",
        chooseMultiple: "Pilih file",
        replaceUrl: "Ganti dengan URL",
        promptUrl: "Masukkan URL file",
        chooseDifferent: "Pilih file lain",
        addMore: "Tambahkan file lain",
        remove: "Hapus file",
        removeAll: "Hapus semua file",
      },
      unknownControl: {
        noControl: "Tidak ada kontrol untuk widget '%{widget}'.",
      },
      unknownPreview: {
        noPreview: "Tidak ada pratinjau untuk widget '%{widget}'.",
      },
      headingOptions: {
        headingOne: "Judul 1",
        headingTwo: "Judul 2",
        headingThree: "Judul 3",
        headingFour: "Judul 4",
        headingFive: "Judul 5",
        headingSix: "Judul 6",
      },
      datetime: {
        now: "Sekarang",
      },
      list: {
        add: "Tambah %{item}",
        addType: "Tambah %{item}",
      },
    },
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: "Draf",
      copy: "Salin",
      copyUrl: "Salin URL",
      copyPath: "Salin Path",
      copyName: "Salin Nama",
      copied: "Disalin",
    },
    mediaLibrary: {
      onDelete: "Apakah Anda yakin ingin menghapus media yang dipilih?",
      fileTooLarge:
        "File terlalu besar.\nDikonfigurasi untuk tidak mengizinkan file lebih besar dari %{size} kB.",
    },
    mediaLibraryModal: {
      loading: "Memuat...",
      noResults: "Tidak ada hasil.",
      noAssetsFound: "Tidak ada aset ditemukan.",
      noImagesFound: "Tidak ada gambar ditemukan.",
      private: "Pribadi ",
      images: "Gambar",
      mediaAssets: "Aset media",
      search: "Cari...",
      uploading: "Mengunggah...",
      upload: "Unggah",
      download: "Unduh",
      deleting: "Menghapus...",
      deleteSelected: "Hapus yang dipilih",
      chooseSelected: "Pilih yang dipilih",
    },
  },
  ui: {
    default: {
      goBackToSite: "Kembali ke situs",
    },
    errorBoundary: {
      title: "Kesalahan",
      details: "Telah terjadi kesalahan - harap ",
      reportIt: "buka laporan di GitHub.",
      detailsHeading: "Detail",
      privacyWarning:
        "Membuka laporan akan mempopulasikannya dengan pesan kesalahan dan data debugging. Harap verifikasi informasinya dan hapus data sensitif jika ada.",
      recoveredEntry: {
        heading: "Dokumen yang dipulihkan",
        warning:
          "Harap salin/tempel ini ke tempat lain sebelum meninggalkan halaman!",
        copyButtonLabel: "Salin ke papan klip",
      },
    },
    settingsDropdown: {
      logOut: "Keluar",
    },
    toast: {
      onFailToLoadEntries: "Gagal memuat entri: %{details}",
      onFailToLoadDeployPreview: "Gagal memuat pratinjau: %{details}",
      onFailToPersist: "Gagal menyimpan entri: %{details}",
      onFailToDelete: "Gagal menghapus entri: %{details}",
      onFailToUpdateStatus: "Gagal memperbarui status: %{details}",
      missingRequiredField:
        "Ups, Anda melewatkan kolom yang wajib diisi. Harap lengkapi sebelum menyimpan.",
      entrySaved: "Entri disimpan",
      entryPublished: "Entri diterbitkan",
      entryUnpublished: "Entri dibatalkan penerbitannya",
      onFailToPublishEntry: "Gagal menerbitkan: %{details}",
      onFailToUnpublishEntry: "Gagal membatalkan penerbitan entri: %{details}",
      entryUpdated: "Status entri diperbarui",
      onDeleteUnpublishedChanges: "Perubahan yang belum diterbitkan dihapus",
      onFailToAuth: "%{details}",
      onLoggedOut: "Anda telah keluar, harap cadangkan data dan masuk kembali",
      onBackendDown:
        "Layanan backend mengalami gangguan. Lihat %{details} untuk informasi lebih lanjut",
    },
  },
  workflow: {
    workflow: {
      loading: "Memuat Entri Alur Kerja Editorial",
      workflowHeading: "Alur Kerja Editorial",
      newPost: "Pos Baru",
      description:
        "%{smart_count} entri menunggu ditinjau, %{readyCount} siap untuk diterbitkan. |||| %{smart_count} entri menunggu ditinjau, %{readyCount} siap untuk diterbitkan. ",
      dateFormat: "D MMMM",
    },
    workflowCard: {
      lastChange: "%{date} oleh %{author}",
      lastChangeNoAuthor: "%{date}",
      lastChangeNoDate: "oleh %{author}",
      deleteChanges: "Hapus perubahan",
      deleteNewEntry: "Hapus entri baru",
      publishChanges: "Terbitkan perubahan",
      publishNewEntry: "Terbitkan entri baru",
    },
    workflowList: {
      onDeleteEntry: "Apakah Anda yakin ingin menghapus entri ini?",
      onPublishingNotReadyEntry:
        'Hanya entri dengan status "Siap" yang dapat diterbitkan. Harap seret kartu ke kolom "Siap" untuk mengaktifkan penerbitan.',
      onPublishEntry: "Apakah Anda yakin ingin menerbitkan entri ini?",
      draftHeader: "Draf",
      inReviewHeader: "Sedang Ditinjau",
      readyHeader: "Siap",
      currentEntries: "%{smart_count} entri |||| %{smart_count} entri",
    },
  },
};

export default id;
