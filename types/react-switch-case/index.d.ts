// Type definitions for react-switch-case 1.5
// Project: https://github.com/AlexSergey/react-switch-case
// Definitions by: Fernando Falci <https://github.com/Falci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

import * as React from 'react';

export interface SwitchProps {
    condition: any;
}

interface CaseProps {
    value: any;
}

declare class Swtich extends React.Component<SwitchProps> {}
export declare class Case extends React.Component<CaseProps> {}
export declare class Default extends React.Component {}

export default Swtich;
