import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'
import { Button } from 'primereact/button';

import axios from 'axios';

const PrimeTable2 = () => {
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const dynamicColumns = columns.map((col, i) => {
        return <Column
            key={col.field}
            field={col.field}
            header={col.header} />;
    });


    return (
        <div>

            <div style={{ paddingTop: 10 }}>
                <Button type="submit">Add</Button>

                <DataTable resizableColumns="scroll">
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}

export default PrimeTable2;