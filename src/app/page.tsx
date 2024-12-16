'use client'
import { FileUploadForm } from '@/components/UploaderForm'
import { ImageUploaderForm } from '@/components/UploaderForm'
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs'
import { useState } from 'react'


export default function Home() {
  const [activeTab, setActiveTab] = useState('image')
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cloudinary File Upload</h1>
      {/* choose between file upload and image upload */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
            <TabsTrigger value={'image'}>Upload Image</TabsTrigger>
            <TabsTrigger value={'file'}>Upload File</TabsTrigger>
        </TabsList>
        <TabsContent value='image'>
            <ImageUploaderForm />
        </TabsContent>
        <TabsContent value='file'>
            <FileUploadForm />
        </TabsContent>
      </Tabs>
    </main>
  )
}

