import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronLeft, File } from 'lucide-react';
import { PageHeader } from './layouts/PageHeader';
import { Sidebar } from './layouts/Sidebar';
import { Link, useParams } from 'react-router-dom';
import Api from '@/lib/api';
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';

interface Document {
  id: BigInteger;
  name: string;
  description: string;
  document: string;
  created_at: string;
  updated_at: string;
}

export function DocumentView() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [document, setDocument] = useState('');

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { id } = useParams();

  useEffect(() => {
    fetchDetailDocument();
  }, []);

  const fetchDetailDocument = async () => {
    await Api.get(`/documents/${id}`).then((response) => {
      console.log(response);
      setName(response.data.name);
      setDescription(response.data.description);
      setDocument(response.data.document);
    });
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <PageHeader />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7" asChild>
              <Link to="/docs">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Documents
            </h1>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1" asChild>
                <Link to="/docs">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">List Documents</span>
                </Link>
              </Button>
            </div>
          </div>
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>View Document</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <p className="text-sm font-medium leading-none">Name</p>
                  <p className="text-sm text-muted-foreground">{name}</p>
                </div>
                <div className="grid gap-3">
                  <p className="text-sm font-medium leading-none">Description</p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
                <div className="grid gap-3">
                  <p className="text-sm font-medium leading-none">File Name</p>
                  <p className="text-sm text-muted-foreground">{document}</p>
                </div>
                <div className="grid grap-3 bg-indigo-500 p-2">
                  <Document file="/documents/docs.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width={1080} />
                  </Document>
                  <p className="bg-white mt-2">
                    Page {pageNumber} of {numPages}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
