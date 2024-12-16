import { FileUploadForm } from '@/components/FileUploaderForm'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cloudinary File Upload</h1>
      <FileUploadForm />
    </main>
  )
}

