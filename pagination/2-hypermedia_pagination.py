def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Return a dictionary containing hypermedia pagination information.
        """
        # On appelle get_page qui contient déjà les asserts
        data = self.get_page(page, page_size)
        
        # Calcul du total de pages
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        # Logique pour next_page et prev_page
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
