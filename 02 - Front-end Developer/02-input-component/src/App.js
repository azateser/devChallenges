import React from 'react';
import Input from './components/Input';

import { MdLocalPhone, MdLock } from 'react-icons/md';

function App() {
    return (
        <div className="flex w-full flex-col gap-20 p-12">
            <div className="flex items-start gap-20">
                <div className="flex flex-col gap-4">
                    <div>{'<Input />'}</div>
                    <div>
                        <Input />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div>{"<Input title='Label' />"}</div>
                    <div>
                        <Input title="Label" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>{"<Input helperText='Some interesting text' />"}</div>
                    <div>
                        <Input helperText="Some interesting text" />
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-20">
                <div className="flex flex-col gap-2">
                    <div>{'<Input error />'}</div>
                    <div>
                        <Input error title="Label" helperText="Some interesting text" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>{'<Input disabled />'}</div>
                    <div>
                        <Input disabled title="Label" helperText="Some interesting text" />
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-20">
                <div className="flex flex-col gap-2">
                    <div>{"<Input size='sm' />"}</div>
                    <div>
                        <Input size="sm" title="Label" helperText="Some interesting text" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>{"<Input size='md' />"}</div>
                    <div>
                        <Input size="md" title="Label" helperText="Some interesting text" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>{"<Input size='lg' />"}</div>
                    <div>
                        <Input size="lg" title="Label" helperText="Some interesting text" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>{"<Input size='xl' />"}</div>
                    <div>
                        <Input size="xl" title="Label" helperText="Some interesting text" />
                    </div>
                </div>
            </div>
            <div className="flex w-full items-start gap-20">
                <div className="flex w-full flex-col gap-2">
                    <div>{'<Input fullWidth />'}</div>
                    <div>
                        <Input fullWidth title="Label" helperText="Some interesting text" />
                    </div>
                </div>
            </div>
            <div className="flex w-full items-start gap-20">
                <div className="flex flex-col gap-2">
                    <div>{"<Input startIcon='<MdLocalPhone />' />"}</div>
                    <div>
                        <Input startIcon={<MdLocalPhone />} title="Label" helperText="Some interesting text" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div>{"<Input endIcon='<MdLock />' />"}</div>
                    <div>
                        <Input endIcon={<MdLock />} title="Label" helperText="Some interesting text" />
                    </div>
                </div>
            </div>
            <div className="flex w-full items-start gap-20">
                <div className="flex w-full flex-col gap-2">
                    <div>{"<Input value='Text' />"}</div>
                    <div>
                        <Input value="Text" title="Label" helperText="Some interesting text" />
                    </div>
                </div>
            </div>

            <div className="flex w-full items-start gap-20">
                <div className="flex flex-col gap-2">
                    <div>{'<Input multiline />'}</div>
                    <div>
                        <Input multiline value="Text" title="Label" helperText="Some interesting text" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div>{'<Input multiline row={4} />'}</div>
                    <div>
                        <Input multiline row={4} value="Text" title="Label" helperText="Some interesting text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
