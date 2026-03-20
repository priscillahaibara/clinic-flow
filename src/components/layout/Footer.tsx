export function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm text-gray-600">
          All rights reserved © {new Date().getFullYear()} -   
          <span className="font-semibold text-gray-800"> Priscilla Haibara</span>
        </p>
      </div>
    </footer>
  );
}
