using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Library.Example.RNReactNativeLibraryExample
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeLibraryExampleModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeLibraryExampleModule"/>.
        /// </summary>
        internal RNReactNativeLibraryExampleModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeLibraryExample";
            }
        }
    }
}
